interface WalletData {
  last_updated: string
  name: string
  image_name: string
  brand_color: string
  url: string
  wallet_live_date: string
  active_development_team: boolean
  languages_supported: string[]
  twitter: string
  discord: string
  reddit: string
  telegram: string
  ios: boolean
  android: boolean
  linux: boolean
  windows: boolean
  macOS: boolean
  firefox: boolean
  chromium: boolean
  hardware: boolean
  open_source: boolean
  repo_url: string
  non_custodial: boolean
  security_audit: string[]
  scam_protection: boolean
  hardware_support: boolean
  walletconnect: boolean
  rpc_importing: boolean
  nft_support: boolean
  connect_to_dapps: boolean
  staking: boolean
  swaps: boolean
  multichain?: boolean
  layer_2: boolean
  gas_fee_customization: boolean
  ens_support: boolean
  erc_20_support: boolean
  eip_1559_support: boolean
  buy_crypto: boolean
  withdraw_crypto: boolean
  multisig: boolean
  social_recovery: boolean
  onboard_documentation: string
  documentation: string
}

const walletData: WalletData[] = [
  {
    last_updated: "June 22, 2022",
    name: "Keystone",
    image_name: "keystone",
    brand_color: "#ffffff",
    url: "https://keyst.one/",
    wallet_live_date: "Dec 2018",
    active_development_team: true,
    languages_supported: ["en", "zh", "es", "ko"],
    twitter: "https://twitter.com/KeystoneWallet",
    discord: "https://keyst.one/discord",
    reddit: "",
    telegram: "https://t.me/KeystoneWallet",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: true,
    open_source: true,
    repo_url: "https://github.com/KeystoneHQ",
    non_custodial: true,
    security_audit: [
      "https://github.com/KeystoneHQ/Keystone-developer-hub/tree/main/audit-report",
      "https://keyst.one/bug-bounty-program",
    ],
    scam_protection: false,
    hardware_support: true,
    walletconnect: false,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: true,
    erc_20_support: false,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://support.keyst.one/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Numio",
    image_name: "numio",
    brand_color: "#3F3F3F",
    url: "https://www.numio.one/",
    wallet_live_date: "December 2020",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/GetNumio/",
    discord: "",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [],
    scam_protection: false,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://docs.numio.one/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Coin98",
    image_name: "coin98",
    brand_color: "#ffffff",
    url: "https://coin98.com/wallet",
    wallet_live_date: "2018",
    active_development_team: true,
    languages_supported: [
      "vi",
      "en",
      "zh",
      "jp",
      "ko",
      "tr",
      "th",
      "es",
      "id",
      "el",
      "pt",
      "fr",
    ],
    twitter: "https://twitter.com/coin98_wallet",
    discord: "https://c98.link/discord",
    reddit: "",
    telegram: "https://t.me/coin98wallet",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: ["https://coin98.com/audit"],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://docs.coin98.com/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Loopring wallet",
    image_name: "loopring",
    brand_color: "#ffffff",
    url: "https://loopring.io/#/wallet",
    wallet_live_date: "Nov 25, 2020",
    active_development_team: true,
    languages_supported: ["en", "zh"],
    twitter: "https://twitter.com/loopringorg",
    discord: "http://discord.gg/KkYccYp",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [
      "https://solidified.io/work/loopring/",
      "https://github.com/Loopring/protocols/blob/master/packages/hebao_v1/audit_report_solidified_response.md",
      "https://github.com/Loopring/protocols/tree/release_loopring_3.6.3/packages/loopring_v3/security_audit",
    ],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: false,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: true,
    onboard_documentation: "",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "AirGap wallet",
    image_name: "airgap",
    brand_color: "#50249F",
    url: "https://airgap.it/",
    wallet_live_date: "July 2017",
    active_development_team: true,
    languages_supported: ["en", "de", "zh"],
    twitter: "https://twitter.com/AirGap_it/",
    discord: "https://discord.gg/gnWqCQsteh",
    reddit: "",
    telegram: "https://t.me/AirGap",
    ios: true,
    android: true,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/airgap-it/airgap-wallet",
    non_custodial: true,
    security_audit: [
      "https://github.com/airgap-it/airgap-coin-lib/tree/master/docs/audits",
    ],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: false,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: true,
    onboard_documentation: "https://support.airgap.it/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Argent",
    image_name: "argent",
    brand_color: "#ffffff",
    url: "https://www.argent.xyz/",
    wallet_live_date: "2018",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/argenthq",
    discord: "https://discord.com/invite/GWSyrHg",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: true,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [
      "https://github.com/argentlabs/argent-contracts/tree/develop/audit",
      "https://www.argent.xyz/argent-bug-bounty/",
    ],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: true,
    onboard_documentation: "https://www.argent.xyz/learn/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Portis",
    image_name: "portis",
    brand_color: "#ffffff",
    url: "https://portis.io",
    wallet_live_date: "Nov, 2018",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/portis_io",
    discord: "",
    reddit: "",
    telegram: "https://t.me/PortisHQ",
    ios: false,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [],
    scam_protection: false,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://docs.portis.io/",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Coinbase wallet",
    image_name: "coinbase",
    brand_color: "#0052FF",
    url: "https://www.coinbase.com/wallet/developers",
    wallet_live_date: "2018",
    active_development_team: true,
    languages_supported: ["no response.."],
    twitter: "https://twitter.com/CoinbaseWallet",
    discord: "",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: false,
    security_audit: [],
    scam_protection: false,
    hardware_support: true,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: false,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://www.coinbase.com/wallet/tutorials",
    documentation: "",
    // note: "Community contribution, let's follow up with Coinbase",
  },
  {
    last_updated: "June 22, 2022",
    name: "Frame",
    image_name: "frame",
    brand_color: "#222021",
    url: "https://frame.sh",
    wallet_live_date: "April 2019",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/0xFrame",
    discord: "https://discord.gg/rr4Yr3JkPq",
    reddit: "",
    telegram: "",
    ios: false,
    android: false,
    linux: true,
    windows: true,
    macOS: true,
    firefox: true,
    chromium: true,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/floating/frame",
    non_custodial: true,
    security_audit: ["asked if these are available"],
    scam_protection: false,
    hardware_support: true,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation:
      "https://framelabs.notion.site/Getting-Started-Guide-775a95edec3244ce80e118ead8ea6516",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Brave Wallet",
    image_name: "brave",
    brand_color: "#fe1f02",
    url: "https://brave.com/wallet",
    wallet_live_date: "November 2021",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/brave",
    discord: "",
    reddit: "https://www.reddit.com/r/brave_browser",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: true,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/brave/brave-core/ ",
    non_custodial: true,
    security_audit: ["asked if these are available"],
    scam_protection: true,
    hardware_support: true,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation:
      "https://wallet-docs.brave.com/, https://support.brave.com/hc/en-us/articles/4415497656461-Brave-Wallet-FAQ",
    documentation:
      "https://wallet-docs.brave.com/, https://support.brave.com/hc/en-us/articles/4415497656461-Brave-Wallet-FAQ",
  },
  {
    last_updated: "June 22, 2022",
    name: "Tally Ho!",
    image_name: "tallyho",
    brand_color: "#0D2321",
    url: "https://tally.cash/",
    wallet_live_date: "December 2021",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/TallyCash",
    discord: "chat.tally.cash",
    reddit: "",
    telegram: "",
    ios: false,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: true,
    chromium: true,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/tallycash/extension",
    non_custodial: true,
    security_audit: [
      "https://leastauthority.com/blog/audit-of-tally-browser-extension-wallet-key-handling-for-ylvis-llc/",
      "https://code4rena.com/reports/2021-10-tally/",
    ],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: false,
    gas_fee_customization: false,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://docs.tally.cash/tally/",
    documentation:
      "https://docs.tally.cash/tally/, https://gov.tally.cash/, https://blog.tally.cash/",
  },
  {
    last_updated: "June 22, 2022",
    name: "MetaMask",
    image_name: "metamask",
    brand_color: "#ffffff",
    url: "https://metamask.io",
    wallet_live_date: "2016",
    active_development_team: true,
    languages_supported: ["TODO: 30 languages!"],
    twitter: "https://twitter.com/metamask",
    discord: "",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: true,
    chromium: true,
    hardware: false,
    open_source: false,
    repo_url: "https://github.com/MetaMask",
    non_custodial: true,
    security_audit: [],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://support.metamask.io",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Gnosis Safe",
    image_name: "gnosis",
    brand_color: "#ffffff",
    url: "https://gnosis-safe.io/",
    wallet_live_date: "2018",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/gnosisSafe",
    discord: "https://discord.com/invite/AjG7AQD9Qn",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/safe-global/",
    non_custodial: true,
    security_audit: ["https://gnosis-safe.io/security/"],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: true,
    onboard_documentation: "https://help.gnosis-safe.io/en/",
    documentation: "https://docs.gnosis-safe.io/",
  },
  {
    last_updated: "June 22, 2022",
    name: "Coin wallet",
    image_name: "coinwallet",
    brand_color: "#ffffff",
    url: "https://coin.space/",
    wallet_live_date: "July 2015",
    active_development_team: true,
    languages_supported: [
      "id",
      "ba",
      "cs",
      "de",
      "en",
      "es",
      "fr",
      "cr",
      "it",
      "hu",
      "nl",
      "no",
      "pl",
      "pt-br",
      "rs",
      "vi",
      "tr",
      "ph",
      "ru",
      "uk",
      "th",
      "kh",
      "ko",
      "jp",
      "zh",
    ],
    twitter: "https://twitter.com/CoinAppWallet",
    discord: "",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/CoinSpace/CoinSpace",
    non_custodial: true,
    security_audit: [""],
    scam_protection: false,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: false,
    staking: false,
    swaps: false,
    layer_2: false,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: true,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://support.coin.space/hc/en-us",
    documentation: "",
  },
  {
    last_updated: "June 22, 2022",
    name: "Ambire",
    image_name: "ambire",
    brand_color: "#aa6aff",
    url: "https://www.ambire.com",
    wallet_live_date: "December 2021",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/AmbireWallet",
    discord: "https://discord.gg/nMBGJsb",
    reddit: "",
    telegram: "",
    ios: false,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/ambireTech/wallet",
    non_custodial: true,
    security_audit: ["https://github.com/ambireTech/wallet#audits"],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: true,
    onboard_documentation:
      "https://help.ambire.com/hc/en-us/categories/4404980091538-Ambire-Wallet",
    documentation: "",
  },
  {
    last_updated: "June 23, 2022",
    name: "ZenGo",
    image_name: "zengo",
    brand_color: "#35C4BA",
    url: "https://zengo.com/",
    wallet_live_date: "Jan, 2020",
    active_development_team: true,
    languages_supported: ["en", "fr"],
    twitter: "https://twitter.com/ZenGo",
    discord: "https://twitter.com/zengo",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "https://github.com/ZenGo-X",
    non_custodial: false,
    security_audit: ["https://zengo.com/security/"],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: false,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: false,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: true,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://help.zengo.com/en/",
    documentation: "",
  },
  {
    last_updated: "June 23, 2022",
    name: "Linen wallet",
    image_name: "linen",
    brand_color: "#08CDC7",
    url: "https://linen.app/",
    wallet_live_date: "November, 2019",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/GetLinen",
    discord: "https://discord.com/invite/fbxHDCj",
    reddit: "",
    telegram: "",
    ios: true,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [""],
    scam_protection: false,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: true,
    social_recovery: false,
    onboard_documentation: "https://linen.app/articles/",
    documentation: "https://support.linen.app/en/",
  },
  {
    last_updated: "June 24, 2022",
    name: "imToken",
    image_name: "imtoken",
    brand_color: "#098de6",
    url: "https://token.im/",
    wallet_live_date: "2016",
    active_development_team: true,
    languages_supported: [
      "en",
      "zh",
      "zh-tw",
      "ru",
      "de",
      "jp",
      "ko",
      "fr",
      "es",
      "vi",
    ],
    twitter: "https://twitter.com/imTokenOfficial",
    discord: "https://discord.com/invite/imToken",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "https://github.com/consenlabs/token-core",
    non_custodial: true,
    security_audit: ["https://cure53.de/pentest-report_imtoken.pdf"],
    scam_protection: true,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "",
    documentation: "https://support.token.im/hc/en-us",
  },
  {
    last_updated: "June 24, 2022",
    name: "1inch wallet",
    image_name: "1inch",
    brand_color: "#000000",
    url: "https://1inch.io/",
    wallet_live_date: "April 2021",
    active_development_team: true,
    languages_supported: [
      "en",
      "ru",
      "zh",
      "fr",
      "de",
      "hi",
      "id",
      "jp",
      "ko",
      "pt",
      "es",
      "tr",
      "vi",
    ],
    twitter: "https://twitter.com/1inch",
    discord: "https://discord.com/invite/1inch",
    reddit: "https://www.reddit.com/r/1inch/",
    telegram: "https://t.me/OneInchNetwork",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: false,
    security_audit: [""],
    scam_protection: true,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://help.1inch.io/en/",
    documentation: "",
  },
  {
    last_updated: "June 24, 2022",
    name: "FoxWallet",
    image_name: "foxwallet",
    brand_color: "#ffffff",
    url: "https://foxwallet.com/en",
    wallet_live_date: "November, 2021",
    active_development_team: true,
    languages_supported: ["en", "zh", "uk", "ru", "es", "id"],
    twitter: "https://twitter.com/FoxWallet",
    discord: "https://discord.com/invite/JVjVbe3Zth",
    reddit: "",
    telegram: "https://t.me/FoxWallet_EN",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: ["https://www.certik.com/projects/fox-wallet"],
    scam_protection: false,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: true,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: false,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://hc.foxwallet.com/docs/",
    documentation: "https://hc.foxwallet.com/docs/faq",
  },
  {
    last_updated: "June 24, 2022",
    name: "MyCrypto",
    image_name: "mycrypto",
    brand_color: "#FFFFFF",
    url: "https://mycrypto.com",
    wallet_live_date: "Feb, 2018",
    active_development_team: true,
    languages_supported: [
      "en",
      "de",
      "el",
      "es",
      "fi",
      "fr",
      "hu",
      "id",
      "it",
      "jp",
      "nl",
      "no",
      "pl",
      "pt",
      "ru",
      "ko",
      "tr",
      "vi",
      "zh",
      "zh-tw",
    ],
    twitter: "https://twitter.com/mycrypto",
    discord: "",
    reddit: "",
    telegram: "",
    ios: false,
    android: false,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/MyCryptoHQ",
    non_custodial: true,
    security_audit: [""],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: true,
    nft_support: false,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://blog.mycrypto.com",
    documentation: "",
  },
  {
    last_updated: "June 24, 2022",
    name: "Pillar",
    image_name: "pillar",
    brand_color: "#7501D9",
    url: "https://www.pillar.fi/",
    wallet_live_date: "December 18 2018 V1, June 2020 V2",
    active_development_team: true,
    languages_supported: ["en", "et", "ba", "zh"],
    twitter: "https://twitter.com/PillarWallet",
    discord: "https://chat.pillar.fi/",
    reddit: "",
    telegram: "https://t.me/pillarofficial",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/pillarwallet",
    non_custodial: true,
    security_audit: [
      "https://consensys.net/diligence/audits/private/j6eeg3t1ipskpf/#executive-summary",
    ],
    scam_protection: false,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    multichain: true,
    layer_2: true,
    gas_fee_customization: false,
    ens_support: true,
    erc_20_support: false,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "",
    documentation: "https://help.pillar.fi/en/",
  },
  {
    last_updated: "June 24, 2022",
    name: "MEW wallet",
    image_name: "mew",
    brand_color: "#05C0A5",
    url: "https://www.mewwallet.com",
    wallet_live_date: "13 March 2020",
    active_development_team: true,
    languages_supported: ["en", "ru"],
    twitter: "https://twitter.com/myetherwallet",
    discord: "",
    reddit: "https://www.reddit.com/r/MyEtherWallet/",
    telegram: "https://t.me/myetherwallet",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/mewwallet",
    non_custodial: true,
    security_audit: [""],
    scam_protection: true,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: false,
    nft_support: false,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    multichain: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: false,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://www.mewtopia.com/",
    documentation: "https://help.myetherwallet.com/en/",
  },
  {
    last_updated: "June 24, 2022",
    name: "Unstoppable wallet",
    image_name: "unstoppable",
    brand_color: "#ffbe43",
    url: "https://unstoppable.money/",
    wallet_live_date: "2017",
    active_development_team: true,
    languages_supported: ["en", "fr", "de", "ko", "ru", "zh", "es", "tr"],
    twitter: "https://twitter.com/unstoppablebyhs",
    discord: "https://discord.com/invite/3uECHQ3cEk",
    reddit: "https://www.reddit.com/r/UNSTOPPABLEWallet/",
    telegram: "https://t.me/unstoppable_announcements",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/horizontalsystems/",
    non_custodial: true,
    security_audit: ["https://www.certik.com/projects/unstoppable.money"],
    scam_protection: true,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    multichain: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: false,
    eip_1559_support: true,
    buy_crypto: false,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "",
    documentation: "https://unstoppable.money/faq",
  },
  {
    last_updated: "June 24, 2022",
    name: "MyEtherWallet",
    image_name: "myetherwallet",
    brand_color: "#ffffff",
    url: "https://www.myetherwallet.com/",
    wallet_live_date: "August 2015",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/myetherwallet",
    discord: "",
    reddit: "https://www.reddit.com/r/MyEtherWallet/",
    telegram: "",
    ios: false,
    android: false,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/MyEtherWallet/MyEtherWallet/",
    non_custodial: true,
    security_audit: [""],
    scam_protection: false,
    hardware_support: true,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: true,
    swaps: true,
    multichain: false,
    layer_2: false,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: true,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://www.mewtopia.com",
    documentation: "https://help.myetherwallet.com/en/",
  },
  {
    last_updated: "June 24, 2022",
    name: "AlphaWallet",
    image_name: "alpha",
    brand_color: "#ffffff",
    url: "https://alphawallet.com/",
    wallet_live_date: "2018",
    active_development_team: true,
    languages_supported: ["en", "zh", "es", "fr", "vi", "mm"],
    twitter: "https://twitter.com/alphawallet",
    discord: "https://discord.gg/qYkK6VrWEd",
    reddit: "",
    telegram: "https://t.me/AlphaWalletGroup",
    ios: true,
    android: true,
    linux: false,
    windows: false,
    macOS: false,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: true,
    repo_url: "https://github.com/alphawallet",
    non_custodial: true,
    security_audit: [""],
    scam_protection: false,
    hardware_support: false,
    walletconnect: true,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    multichain: true,
    layer_2: true,
    gas_fee_customization: true,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: true,
    buy_crypto: true,
    withdraw_crypto: false,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "https://alphawallet.zendesk.com/hc/en-us",
    documentation: "",
  },
  {
    last_updated: "June 24, 2022",
    name: "Opera wallet",
    image_name: "opera",
    brand_color: "#ffffff",
    url: "https://crypto.opera.com/",
    wallet_live_date: "January 19 2022",
    active_development_team: true,
    languages_supported: ["en"],
    twitter: "https://twitter.com/Opera_Crypto",
    discord: "https://discord.gg/operacrypto",
    reddit: "",
    telegram: "",
    ios: true,
    android: true,
    linux: true,
    windows: true,
    macOS: true,
    firefox: false,
    chromium: false,
    hardware: false,
    open_source: false,
    repo_url: "",
    non_custodial: true,
    security_audit: [""],
    scam_protection: true,
    hardware_support: false,
    walletconnect: false,
    rpc_importing: false,
    nft_support: true,
    connect_to_dapps: true,
    staking: false,
    swaps: true,
    multichain: true,
    layer_2: false,
    gas_fee_customization: false,
    ens_support: true,
    erc_20_support: true,
    eip_1559_support: false,
    buy_crypto: true,
    withdraw_crypto: true,
    multisig: false,
    social_recovery: false,
    onboard_documentation: "",
    documentation: "",
  },
]

export default walletData
