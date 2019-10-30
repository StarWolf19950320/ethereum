const fs = require('fs');
const GithubSlugger = require('github-slugger');
const toc = {};
let curLevel = [0, 0, 0];

function walk(dir, doc) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file, doc));
    } else {
      /* Is a file */
      if (!doc || doc.length == 0 || file.indexOf(doc) != -1 && !file.startsWith(`docs/${doc}`)) {
        results.push(file);
      }
    }
  });
  return results;
}

function stripLinks(line) {
  return line.replace(/\[([^\]]+)\]\([^)]+\)/, (match, p1) => p1);
}

function addHeaderID(line, slugger, write = false) {
  // check if we're a header at all
  if (!line.startsWith('#')) {
    return line;
  }
  // check if it already has an id
  if (/\{#[^}]+\}/.test(line) && !write) {
    return line;
  }
  const headingText = line.slice(line.indexOf(' ')).replace(/\{#[^}]+\}/, '').trim();
  const headingLevel = line.slice(0, line.indexOf(' '));
  curLevel[headingLevel.length - 1] ++;
  for (let l = headingLevel.length; l < 3; l++) {
    curLevel[l] = 0
  }
  const headerNumber = curLevel.join(".");
  let slug = null;
  if (!write) {
    slug = slugger.slug(stripLinks(headingText));
    toc[headerNumber] = {
      text: headingText,
      slug
    }
  } else {
    if (headerNumber in toc) {
      slug = toc[headerNumber].slug;
      console.log("write heading ID", headerNumber, headingText, "==>", slug);
      return `${headingLevel} ${headingText} {#${slug}}`;
    } else {
      console.log("headerNumber not found", headerNumber, headingText, "==>", slug);
      return line;
    }
  }
}

function addHeaderIDs(lines, write = false) {
  // Sluggers should be per file
  const slugger = new GithubSlugger();
  let inCode = false;
  const results = [];
  lines.forEach(line => {
    // Ignore code blocks
    if (line.startsWith('```')) {
      inCode = !inCode;
      results.push(line);
      return;
    }
    if (inCode) {
      results.push(line);
      return;
    }

    results.push(addHeaderID(line, slugger, write));
  });
  return results;
}

function traverseHeaders(path, doc = "", write = false) {
  const files = walk(path, doc);
  files.forEach(file => {
    if (!file.endsWith('.md')) {
      return;
    }

    curLevel = [0, 0, 0];
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const updatedLines = addHeaderIDs(lines, write);
    if (write) {
      fs.writeFileSync(file, updatedLines.join('\n'));
    }
  });
  if (!write) {
    console.log(toc);
  }
}

// const [path] = process.argv.slice(2);

for (let doc of ["beginners", "developers", "learn", "use"]) {
  traverseHeaders(`docs/${doc}`); // build toc
  traverseHeaders("docs", doc, true); // write heading anchors
}

