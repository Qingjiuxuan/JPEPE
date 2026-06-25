export interface Translation {
  navAbout: string;
  navTokenomics: string;
  navFeatures: string;
  navCommunity: string;
  heroTitle: string;
  heroSubtitle: string;
  contractAddress: string;
  copyBtn: string;
  copiedBtn: string;
  joinTg: string;
  followX: string;
  
  narrativeTitle: string;
  narrativeSubtitle: string;
  narrativeDesc1: string;
  narrativeDesc2: string;
  
  featuresTitle: string;
  featuresSubtitle: string;
  
  feat1Title: string;
  feat1Desc: string;
  feat2Title: string;
  feat2Desc: string;
  feat3Title: string;
  feat3Desc: string;
  feat4Title: string;
  feat4Desc: string;
  
  synergyTitle: string;
  synergySubtitle: string;
  synergyDesc: string;
  
  tokenomicsTitle: string;
  tokenomicsSubtitle: string;
  
  paramSymbol: string;
  paramChain: string;
  paramSupply: string;
  paramTax: string;
  paramFeatures: string;
  
  jpepeName: string;
  jpepeSupply: string;
  jpepeTax: string;
  jpepeFeatures: string;
  
  upepeName: string;
  upepeSupply: string;
  upepeTax: string;
  upepeFeatures: string;

  calculatorTitle: string;
  calculatorSubtitle: string;
  calcInvestment: string;
  calcDailyReturn: string;
  calcTotalReturn: string;
  calcDays: string;
  calcDisclaimer: string;
  calcNote: string;
}

export const translations: Record<'zh' | 'en', Translation> = {
  en: {
    navAbout: "Narrative",
    navTokenomics: "Tokenomics",
    navFeatures: "Mechanisms",
    navCommunity: "Community",
    heroTitle: "The Golden Era of Pepe",
    heroSubtitle: "A fully automatic, on-chain closed-loop dual-token ecosystem on BSC. Driven entirely by smart contracts, zero market manipulation, and absolute deflation.",
    contractAddress: "Contract Address (BSC)",
    copyBtn: "Copy",
    copiedBtn: "Copied!",
    joinTg: "Join Telegram",
    followX: "Follow X (Twitter)",
    
    narrativeTitle: "Ecosystem Narrative",
    narrativeSubtitle: "A premium fundamental layout built for scarcity, stability, and longevity.",
    narrativeDesc1: "JPEPE is born to empower UPEPE. With a total supply of 100,000, it will never circulate and never be traded. It relies on no hype, no market dumping, and zero market makers, acting strictly as the underlying value cornerstone of the entire ecosystem.",
    narrativeDesc2: "UPEPE features an ultra-deflationary total supply of 21 million, where 5 million are permanently burned, and 8 million are bound to co-build the JPEPE liquidity pool. From its very inception, it establishes a rare, stable, and long-lasting fundamental structure.",
    
    featuresTitle: "On-Chain Closed-Loop Mechanisms",
    featuresSubtitle: "A fully decentralized financial model driven automatically by immutable smart contracts.",
    
    feat1Title: "Tax Reflow & Deflation",
    feat1Desc: "All transaction tax fees (from buying, selling, transferring, and adding/removing liquidity) automatically flow back into the LP, continuously thickening the floor pool and driving deflation.",
    
    feat2Title: "JPEPE 10% Protocol Allocation",
    feat2Desc: "Protocol deposits trigger a precise 10% allocation: reflowing to the liquidity pool, direct token burn, and permanent LP dividends.",
    
    feat3Title: "25% Dynamic Pre-settlement",
    feat3Desc: "A 25% dynamic allocation with instant, real-time front-end settlement. Built for fair, transparent community building and community win-win.",
    
    feat4Title: "1.5% Daily Gold-Standard Yield",
    feat4Desc: "Offers a 1.5% daily gold-standard yield, continuously released over 200 days. Fully redeemable at any time and 100% verifiable on-chain.",
    
    synergyTitle: "JPEPE Backing & UPEPE Value Generation",
    synergySubtitle: "No Project Team • No Backend Console • No Market Manipulation • No Hidden Routines",
    synergyDesc: "The ecosystem does not rely on hype or temporary popularity—value is automatically accumulated and solidified by smart contract mechanisms. It represents an elite minority in the primary market: a stable-pool, deflationary, high-dividend, and truly everlasting dual-token ecosystem.",
    
    tokenomicsTitle: "Token Parameters",
    tokenomicsSubtitle: "Transparent and verifiable smart contract parameters on BNB Smart Chain.",
    
    paramSymbol: "Symbol",
    paramChain: "Network",
    paramSupply: "Total Supply",
    paramTax: "Buy/Sell Tax",
    paramFeatures: "Key Characteristics",
    
    jpepeName: "JPEPE (Ecosystem Anchor)",
    jpepeSupply: "100,000 (Locked, never in circulation)",
    jpepeTax: "0% Buy / 0% Sell",
    jpepeFeatures: "Empowers UPEPE, no trading, acts as the ultimate value backing",
    
    upepeName: "UPEPE (Ecosystem Value Token)",
    upepeSupply: "21,000,000 (Deflationary Limit)",
    upepeTax: "Automatic Tax Reflow to LP",
    upepeFeatures: "5M permanently burned, 8M bound to JPEPE liquidity pool",

    calculatorTitle: "Yield Estimator",
    calculatorSubtitle: "Simulate your gold-standard returns based on the 1.5% daily output rate.",
    calcInvestment: "Investment Amount (USDT equivalent)",
    calcDailyReturn: "Est. Daily Yield",
    calcTotalReturn: "Est. Total Yield (200 Days)",
    calcDays: "Release Period",
    calcDisclaimer: "Note: The simulator is for illustrative calculations of the 1.5% daily yield mechanism. Real outputs are executed fully on-chain.",
    calcNote: "200 Days linear unlock, redeemable anytime"
  },
  zh: {
    navAbout: "项目叙事",
    navTokenomics: "代币参数",
    navFeatures: "生态机制",
    navCommunity: "加入社区",
    heroTitle: "Pepe的黄金时代",
    heroSubtitle: "BSC链上全自动闭环双币生态。完全由智能合约自动运行，无项目方、无控盘、极致通缩，开启长久收益新篇章。",
    contractAddress: "合约地址 (BSC)",
    copyBtn: "一键复制",
    copiedBtn: "已复制!",
    joinTg: "加入 Telegram 社区",
    followX: "关注官方 X (Twitter)",
    
    narrativeTitle: "项目叙事",
    narrativeSubtitle: "从诞生之初，就奠定稀缺、稳健、长久的底层格局。",
    narrativeDesc1: "JPEPE为UPEPE赋能而生，10万总量永不流通、永不买卖。不炒作、不砸盘、零庄家，只做整个生态的底层价值基石。",
    narrativeDesc2: "UPEPE 2100万极致通缩总量，500万永久销毁，800万绑定JPEPE底池共建。稀缺性与稳定性相得益彰。",
    
    featuresTitle: "全生态链上全自动闭环机制",
    featuresSubtitle: "无中心化管理，由智能合约自动执行的卓越去中心化金融模型。",
    
    feat1Title: "税费回流与持续通缩",
    feat1Desc: "买卖/转账/加减池 全部交易税费自动回流LP、持续增厚底池、形成不可逆转的极致通缩效应。",
    
    feat2Title: "JPEPE协议10%精准拨比",
    feat2Desc: "JPEPE协议入金触发10%精准比例拨付：自动回流底池 + 永久销毁 + LP持有者永久分红。",
    
    feat3Title: "25%动态前置秒结",
    feat3Desc: "25%动态前置分配，支持秒级实时结算。公正、公平、公开，专为社区共建与互利共赢设计。",
    
    feat4Title: "金本位1.5%日产出",
    feat4Desc: "提供每日1.5%的金本位高收益，200天持续稳定释放。支持随时赎回，全程在区块链上公开透明可查。",
    
    synergyTitle: "JPEPE托底赋能，UPEPE持续造血",
    synergySubtitle: "无项目方 • 无后台 • 无控盘 • 无套路",
    synergyDesc: "不靠短期热度炒作，只靠严密的合约机制自动沉淀生态价值。做一级市场极少数稳盘、通缩、高分红、真长久的常青双币生态。",
    
    tokenomicsTitle: "代币参数",
    tokenomicsSubtitle: "在 BNB Smart Chain 上部署的透明且不可更改的智能合约参数。",
    
    paramSymbol: "代币符号",
    paramChain: "部署公链",
    paramSupply: "发行总量",
    paramTax: "买卖税率",
    paramFeatures: "核心特性",
    
    jpepeName: "JPEPE (生态锚定币)",
    jpepeSupply: "100,000 (锁死，永不流通)",
    jpepeTax: "0% 买 / 0% 卖",
    jpepeFeatures: "为UPEPE赋能而生，不买卖，生态底层价值基石",
    
    upepeName: "UPEPE (生态价值币)",
    upepeSupply: "21,000,000 (极致通缩总量)",
    upepeTax: "税费全回流LP",
    upepeFeatures: "500万永久销毁，800万绑定JPEPE底池共建",

    calculatorTitle: "收益测算器",
    calculatorSubtitle: "基于日产出 1.5% 的金本位释放机制，快速测算您的预计收益。",
    calcInvestment: "投资金额 (等值 USDT)",
    calcDailyReturn: "预计每日产出",
    calcTotalReturn: "预计总产出 (200天)",
    calcDays: "释放周期",
    calcDisclaimer: "注：本测算器仅用于模拟 1.5% 日产出机制的数值。实际产出完全由区块链智能合约全自动执行。",
    calcNote: "200天持续线性释放，支持随时赎回"
  }
};
