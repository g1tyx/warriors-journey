/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Actions": "动作",
    "Defence 1XP": "防御 1经验",
    "Attack 2XP": "攻击 2经验",
    "Game stats": "游戏统计",
    "Hard reset": "硬复位",
    "Life 1XP": "生命 1经验",
    "Your stats": "你的属性",
    "Warrior's Journey": "勇士之旅",
    "Trainer": "培训师",
    "Shop": "商店",
    "Reduce stage": "降低关卡",
    "SixBytesUnder": "SixBytesUnder",
    "Speed 1XP": "速度 1经验",
    "Receive rewards for your outstanding performance.": "因您的出色表现而获得奖励。",
    ", manual attack is available at 75% of wait time.": "，在达到等待时间的 75% 时可以进行手动攻击。",
    "\t\t\t\ti\n\t\t": "\t\t\t\ti\n\t\t",
    "\t\t\t\tx 1\n\t\t": "\t\t\t\tx 1\n\t\t",
    "\t\t\t\tx 10\n\t\t": "\t\t\t\tx 10\n\t\t",
    "\t\t\tHard reset": "\t\t\t硬重置",
    "\t\t\tReduce stage": "\t\t\t降低关卡",
    "\t\t\tShop\n\t\t": "\t\t\t商店\n\t\t",
    "\t\t\tTrainer\n\t\t": "\t\t\t培训师\n\t\t",
    ", manual attack is available at 75% of wait time.": "，手动攻击在等待时间的 75% 时可用。",
    "A merchant will open his shop for you as soon as he sees you have enough coins to afford his goods.": "商人一看到你有足够的钱买他的商品，就会为你开店。",
    "After every attack received, your defence is reduced by 1/10 of monster's attack for the remainder of this fight.": "每次受到攻击后，在这场战斗的剩余时间内，你的防御力会降低怪物攻击力的 1/10。",
    "Amount of damage you can sustain before being forced to retreat to camp.": "在被迫撤退到营地之前，您可以承受的伤害量。",
    "Automatic attack interval in milliseconds.": "以毫秒为单位的自动攻击间隔。",
    "Damage dealt = your attack - monster defence.": "造成的伤害=你的攻击-怪物防御。",
    "Damage you receive is reduced by your defence value.": "你受到的伤害会因你的防御值而减少。",
    "Each upgrade grants +1 to relevant stat. Life is increased by +4 each time. Speed is reduced by a different value depending on upgrade level.": "每次升级都会使相关属性 +1。每次生命增加+4。根据升级级别，速度会降低不同的值。",
    "Exchange shards for unique bonuses.": "交换碎片以获得独特的奖金。",
    "Note": "注意",
    "Price goes up by +1.": "价格上涨+1。",
    "Receive rewards for your outstanding performance.": "因您的出色表现而获得奖励。",
    "Speed 1XP": "速度 1XP",
    "The higher your attack, the quicker you lower monster's defence after each strike.": "你的攻击越高，每次攻击后你降低怪物防御的速度就越快。",
    "To Battle!": "去战斗！",
    "Train multiple levels with each purchase.": "每次购买训练多个等级。",
    "\t\tAutofighter": "\t\t自动战斗者",
    "\t\tBridge Four!": "\t\t四号桥！",
    "\t\tCritical hit chance 5%": "\t\t暴击率 5%",
    "\t\tFast learner": "\t\t快速学习者",
    "\t\tGood looter": "\t\t优秀的掠夺者",
    "\t\tOffline profit": "\t\t离线利润",
    "\t\tPrestige I": "\t\t声望 I",
    "\t\tShield adept": "\t\t盾牌高手",
    "\t\tTreasure hunter": "\t\t寻宝者",
    "10% more coins found on monsters.": "在怪物身上发现的硬币增加 10%。",
    "10% more experience gained from monsters.": "从怪物身上获得的经验增加 10%。",
    "Available upgrades": "可用升级",
    "Back to camp": "回到营地",
    "Collect 4 small shields and unlock full shield which once used will completely negate next monster attack.": "收集 4 个小盾牌并解锁完整的盾牌，一旦使用将完全抵消下一次怪物的攻击。",
    "For airsick lowlanders only.": "仅适用于晕机的低地人。",
    "Option to automatically fight again after defeat.": "失败后自动再次战斗的选项。",
    "Owned upgrades": "拥有的升级",
    "Scoring critical hit doubles damage.": "获得致命一击会使伤害翻倍。",
    "Shard store": "碎片商店",
    "Spawn random treasure chests filled with ...well, treasure.": "随机生成装满……宝藏的宝箱。",
    "Speak the Immortal Words and ascend. Anything you purchased with XP or coins is lost, but new purchases will be twice as effective. Shard upgrades are kept and new upgrades are unlocked. You must beat stage 50 to ascend.": "说出不朽的话语并提升。 您使用 XP 或硬币购买的任何物品都会丢失，但新购买的效果会翻倍。 保留碎片升级并解锁新升级。 您必须通过第 50 关才能上升。",
    "Unlock offline gains for up to 2 hours.": "解锁离线收益长达 2 小时。",
    "All time coins collected": "收集的所有时间硬币",
    "All time earned experience": "所有时间获得的经验",
    "Deal damage with one strike": "一击造成伤害",
    "Death is just a begining": "死亡只是一个开始",
    "Defeat dwarf worker": "击败矮人工人",
    "Defeat peasant": "击败农民",
    "Each new achievement reached awards shards that can be used to purchase powerful upgrades.": "每项新成就都会获得可用于购买强大升级的奖励碎片。",
    "High Score table": "高分表",
    "If you can't progress to the next stage, simply reduce your current stage indicator by 10.": "如果您无法进入下一关卡，只需将当前关卡指示器减少 10。",
    "Kill monsters": "杀死怪物",
    "Perform manual attacks": "执行手动攻击",
    "Reach stage 1000 and defeat the final boss": "达到第 1000 关并击败最终 Boss",
    "Seconds of active game play": "活跃游戏的秒数",
    "XP": "经验值",
    "Autofighter": "自动战斗者",
    "Toggle autofight - automatically go back to fighting as soon as you recover in camp.": "切换自动战斗 - 一旦您在营地恢复，就会自动返回战斗。",
    "Your save game will be deleted and you'll start from zero again.": "您保存的游戏将被删除，您将再次从零开始。",
    "\t\t\tAuto fight": "\t\t\t自动战斗",
    "New achievement": "新成就",
    "Shop is now open!": "商店已开放",
    "Each upgrade significantly increases your attack or defence stat.": "每次升级都会显著增加您的攻击或防御属性数据。",
    "Offline profit": "离线利润",
    "one": "一个",
    "There are total of 10 upgrades for each, plus": "每个总共有 10 次升级，另外",
    "ultimate item - choose wisely.": "终极物品 - 明智地选择。",
    "Defeat dwarf warrior": "击败矮人战士",
    "Defeat elf female": "击败精灵女性",
    "Defeat elf male": "击败精灵男性",
    "Spend shards": "花费碎片",
    "Total shards found": "找到的总碎片",
    "Offline gains": "离线收益",
    "During a minute you've been away, your hero farmed:": "在你离开的一分钟内，你的英雄获得了：",
    "\t\tBetter looter": "\t\t更好的掠夺者",
    "\t\tCritical hit chance 10%": "\t\t暴击率 10%",
    "\t\tFaster learner": "\t\t更快的学习者",
    "During a minute you've been away, your hero farmed:": "在你离开的一分钟内，你的英雄耕种：",
    "Experience bonus now 25%.": "经验奖励现在 25%。",
    "Fast learner": "快速学习者",
    "Good looter": "好强盗",
    "Loot monsters for 25% more coins.": "掠夺怪物获得 25% 以上的金币。",
    "Shield adept": "盾牌高手",
    "Treasure hunter": "淘金者",
    "Defeat stage bosses": "击败关卡Boss",
    "\t\t\t\t\t\tblock": "\t\t\t\t\t\t格挡",
    "Attack": "攻击",
    "Better looter": "更好的掠夺者",
    "Collect shields": "收集盾牌",
    "Deaths": "死亡次数",
    "Defeat goblin": "击败哥布林",
    "Defence": "防御",
    "Faster learner": "更快的学习者",
    "High Score": "高分",
    "Kills": "击杀",
    "Life": "生命值",
    "Name": "名称",
    "Name yourself": "给自己起名字",
    "Next page": "下一页",
    "Out of 0 players.": "共 0 名玩家。",
    "place in the hall of fame!": "进入名人堂！",
    "Playtime": "游戏时间",
    "Previous page": "上一页",
    "Stage": "关卡",
    "You take": "你获得",
    "You must beat stage 50 to ascend": "您必须通过第 50 关才能转生",
    "\t\tSubmit\n": "\t\t提交\n",
    "\t\t\t\t\t\t\t\tHaste $100\n\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t加速 $100\n\t\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\tHeal $50\n\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t治疗 $50\n\t\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\tIncrease attack by 10% for the duration of this battle run.\n\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t在本次战斗运行期间增加 10% 攻击。\n\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\tPerform immediate attack.\n\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t立即攻击。\n\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\tRestores 50% of your max life.\n\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t恢复 50% 的最大生命值。\n\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\tStrength $20\n\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t力量 $20\n\t\t\t\t\t\t\t",
    "\t\t\t\tShardmutation\n\t\t": "\t\t\t\t碎片变异\n\t\t",
    "\t\t\t\tTransmutation\n\t\t": "\t\t\t\t嬗变\n\t\t",
    "Better healing potion I": "更好的治疗药水 I",
    "Better healing potion II": "更好的治疗药水 II",
    "Better healing potion III": "更好的治疗药水 III",
    "Better healing potion IV": "更好的治疗药水IV",
    "Better strength potion": "更好的力量药水",
    "Convert all your coins into experience (1 to 1). This process will cost 20% of your coins.": "将所有硬币转换为经验（1 到 1）。这个过程将花费你 20% 的硬币。",
    "Convert all your shards into experience (1 to 1000). This process will cost 20% of your shards.": "将所有碎片转换为经验（1 到 1000）。这个过程将花费你 20% 的分片。",
    "Defeat evil ent": "击败邪恶的ent",
    "Defeat fire demon": "击败火魔",
    "Defeat fire dragon": "击败火龙",
    "Defeat gargoyle": "击败石像鬼",
    "Defeat green dragon": "击败绿龙",
    "Defeat lizard man mage": "击败蜥蜴人法师",
    "Defeat lizard man warrior": "击败蜥蜴人战士",
    "Defeat medusa": "击败美杜莎",
    "Defeat minotaur": "击败牛头怪",
    "Defeat one eye goblin": "击败一只眼睛哥布林",
    "Defeat orc": "击败兽人",
    "Defeat orc rider": "击败兽人骑士",
    "Defeat scorpion": "击败蝎子",
    "Defeat skeleton mage": "击败骷髅法师",
    "Defeat skeleton ranger": "击败骷髅游侠",
    "Defeat skeleton warrior": "击败骷髅战士",
    "Defeat soldier": "击败士兵",
    "Defeat spider": "击败蜘蛛",
    "Defeat troll": "击败巨魔",
    "Defeat warlock": "击败术士",
    "Defeat wizard": "击败巫师",
    "Defeat wolf": "击败狼",
    "Double coins found on monsters.": "在怪物身上发现双倍硬币。",
    "Double experience from monsters.": "怪物的双重经验。",
    "Double your chances of finding a shard after a fight.": "战斗后找到碎片的机会加倍。",
    "Experience bonus now 50%.": "经验奖励现在 50%。",
    "Expert shard finder": "专家分片查找器",
    "Fastest learner": "最快的学习者",
    "If you have a full shield and a monster attack would kill you, you'll automatically use this shield charge to prevent defeat.": "如果你有一个完整的盾牌并且怪物攻击会杀死你，你会自动使用这个盾牌来防止失败。",
    "Immediately launch additional attack.": "立即发动额外攻击。",
    "Increases your attack by 10%.": "使你的攻击提高 10%。",
    "Keen treasure hunter": "敏锐的寻宝者",
    "Life leech": "生命水蛭",
    "Lucky shard finder": "幸运碎片发现者",
    "Master learner": "硕士学习者",
    "Master looter": "抢劫大师",
    "Now 50% more coins found on monsters.": "现在在怪物身上发现的硬币增加了 50%。",
    "Offline profit II": "线下盈利二",
    "Offline profit III": "线下利润三",
    "Prestige I": "威望我",
    "Prestige II": "威望二",
    "Shield master": "盾牌大师",
    "Speak the Immortal Words and ascend. This will double your future stats upgrades again and unlock even more upgrades. You must beat stage 100 to ascend.": "说出不朽的话语并提升。这将使您未来的统计数据升级再次翻倍，并解锁更多升级。您必须通过第 100 关才能上升。",
    "Spend shards wisely. Each 100 shards you own adds\n\t\t\t\t1%\n\t\t\t\tbonus to your base life, attack and defence.": "明智地使用碎片。您拥有的每 100 个碎片会为您的基础生命、攻击和防御增加\n\t\t\t\t1%\n\t\t\t\t奖励。",
    "Superb looter": "精湛的掠夺者",
    "Treasure chests now include shards.": "宝箱现在包括碎片。",
    "Ultimate weapon deals additional 5% damage that is returned to you as life.": "终极武器造成额外 5% 的伤害，作为生命返还给你。",
    "Unlock haste potion": "解锁急速药水",
    "Use potions": "使用药水",
    "When monster drops a shard, immediately get another one.": "当怪物掉落碎片时，立即获得另一个碎片。",
    "Bridge Four!": "四号桥！",
    "During a day you've been away, your hero farmed:": "在你离开的一天里，你的英雄获得了：",
    "Spend shards wisely. Each 100 shards you own adds\n\t\t\t\t2%\n\t\t\t\tbonus to your base life, attack and defence.": "明智地使用碎片。 您拥有的每 100 个碎片会为您的基础生命、攻击和防御增加\n\t\t\t\t2%\n\t\t\t\t奖励。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "i": "i",
    "v2.5.9": "v2.5.9",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Attack: ": "攻击: ",
    "Auto attacks: ": "自动攻击：",
    "Damage dealt / received: ": "造成/受到的伤害: ",
    "Defence: ": "防御: ",
    "Kills / Deaths: ": "击杀 / 死亡: ",
    "Life: ": "生命值: ",
    "Manual attacks: ": "手动攻击: ",
    "Potions used (He/S/Ha): ": "使用的药水（He/S/Ha）：",
    "Speed: ": "速度: ",
    "XP:": "经验:",
    "Stage: ": "关卡: ",
    "Shards owned: ": "拥有的碎片：",
    "Reached: ": "到达: ",
    "Kill monsters: ": "杀死怪物：",
    "Defeat elf female: ": "击败精灵女性：",
    "Defeat dwarf worker: ": "击败矮人工人：",
    "\t\t\tArmour $": "\t\t\t护甲 $",
    "\t\t\tWeapon $": "\t\t\t武器 $",
    "Deal damage with one strike: ": "一击造成伤害：",
    "Defeat peasant: ": "击败农民：",
    "(current: ": "(当前: ",
    "Defeat dwarf warrior: ": "击败矮人战士：",
    "Defeat elf male: ": "击败精灵男性：",
    "Total shards found: ": "总计找到的碎片：",
    "Defeat stage bosses: ": "击败关卡Boss：",
    "Seconds of active game play: ": "活跃游戏的秒数：",
    "Spend shards: ": "花费碎片：",
    "All time earned experience: ": "所有时间获得的经验达到：",
    "Collect shields: ": "收集盾牌：",
    "Perform manual attacks: ": "执行手动攻击：",
    "Critical hit chance ": "暴击几率 ",
    "Defeat goblin: ": "击败哥布林: ",
    "\t\tCritical hit chance ": "\t\t暴击率 ",
    "Death is just a begining: ": "死亡只是一个开始：",
    "Defeat one eye goblin: ": "击败独眼哥布林：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\t([\d\.,]+)\n$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\)$/,
    /^x([\d\.,]+)$/,
    /^x ([\d\.,]+)$/,
    /^\t\t\t\t\t\t\-([\d\.,]+)\n\t\t\t\t\t$/,
    /^\t\t\t\t\t\-([\d\.,]+)\n\t\t\t\t$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Extend offline gains for up to (.+) hours.$/, '将离线收益延长至 $1 小时。'],
    [/^Restores (.+) of your total life.$/, '恢复你总生命的 $1。'],
    [/^Reward: (.+) shards and (.+) attack and defence against elf male$/, '奖励：$1 碎片和 $2 对 精灵男性 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against elf female$/, '奖励：$1 碎片和 $2 对 精灵女性 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against dwarf warrior$/, '奖励：$1 碎片和 $2 对 矮人战士 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against dwarf worker$/, '奖励：$1 碎片和 $2 对 矮人工人 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against one eye goblin$/, '奖励：$1 碎片和 $2 对 独眼哥布林 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against goblin$/, '奖励：$1 碎片和 $2 对 哥布林 的攻击和防御'],
    [/^Reward: (.+) shards and (.+) attack and defence against peasant$/, '奖励：$1 碎片和 $2 对 农民 的攻击和防御'],
    [/^During (.+) minutes you've been away, your hero farmed:$/, '在您离开的 $1 分钟，您的英雄获得了：'],
    [/^\t\t\tLife ([\d\.,]+)XP$/, '\t\t\t生命 $1经验'],
    [/^\t\t\tSpeed ([\d\.,]+)XP$/, '\t\t\t速度 $1经验'],
    [/^\t\t\tDefence ([\d\.,]+)XP$/, '\t\t\t防御 $1经验'],
    [/^\t\t\tAttack ([\d\.,]+)XP$/, '\t\t\t攻击 $1经验'],
    [/^\tStage: ([\d\.,]+)\n$/, '\t关卡：$1\n'],
    [/^\tXP:\n\t\t\t\t\t([\d\.,]+)\n$/, '\t经验:\n\t\t\t\t\t$1\n'],
    [/^\t\t\tAttack: ([\d\.,]+)\n\t\t$/, '\t\t\t攻击：$1\n\t\t'],
    [/^\t\t\tDefence: ([\d\.,]+)\n\t\t$/, '\t\t\t防御：$1\n\t\t'],
    [/^\t\t\tShards: ([\d\.,]+)\n\t\t$/, '\t\t\t碎片：$1\n\t\t'],
    [/^\t\t\tSpeed: ([\d\.,]+)\n\t\t$/, '\t\t\t速度：$1\n\t\t'],
    [/^\t\t\tLife: ([\d\.,]+)\n\t\t$/, '\t\t\t生命：$1\n\t\t'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Reward: (.+) shards$/, '奖励：$1 碎片'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);