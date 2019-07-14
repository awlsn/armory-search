
// attack type: name, index, class type?
const skills = [['Standard', 0, 1, 0, 100], ['Throw', 1, 2, 0, 100], ['Impale', 2, 7, 0, 100], ['Jab', 3, 7, 1, 100], ['Strafe', 4, 0, 0, 50], ['Fend', 5, 0, 0, 40],
  ['Tiger Strike', 6, 0, 0, 100], ['Cobra Strike', 7, 0, 0, 100], ['Phoenix Strike', 8, 0, 0, 100], ['Fists of Fire', 9, 7, 2, 100], ['Claws of Thunder', 10, 7, 2, 100],
  ['Blades of Ice', 11, 7, 2, 100], ['Dragon Claw', 12, 7, 2, 100], ['Dragon Tail', 13, 3, 0, 100], ['Dragon Talon', 14, 3, 0, 0], ['Laying Traps', 15, 5, 0, 100],
  ['Double Swing', 16, 7, 3, 100], ['Frenzy', 17, 7, 3, 100], ['Double Throw', 18, 7, 4, 100], ['Whirlwind', 19, 7, 0, 100], ['Concentrate', 20, 0, 0, 100],
  ['Berserk', 21, 0, 0, 100], ['Bash', 22, 0, 0, 100], ['Stun', 23, 0, 0, 100], ['Zeal', 24, 0, 0, 0], ['Smite', 25, 4, 0, 100], ['Feral Rage', 26, 0, 0, 100],
  ['Hunger', 27, 6, 0, 100], ['Rabies', 28, 6, 0, 100], ['Fury', 29, 0, 0, 0], ['Sacrifice', 30, 0, 0, 100], ['Vengeance', 31, 0, 0, 100], ['Conversion', 32, 0, 0, 100]];

// weapons
const weapons = [['[unarmed]', 0, 0, -1, 0, 0], ['Ancient Axe', 10, 6, -1, 0, 1], ['Ancient Sword', 0, 2, -1, 9, 0], ['Arbalest', -10, 8, -1, 1, 0], ['Archon Staff', 10, 6, -1, 0, 1], ['Ashwood Bow', 0, 7, 0, 1, 0],
  ['Ataghan', -20, 2, -1, 9, 0], ['Axe', 10, 2, -1, 0, 1], ['Balanced Axe', -10, 2, -1, 3, 0], ['Balanced Knife', -20, 4, -1, 3, 0], ['Ballista', 10, 8, -1, 1, 0], ['Balrog Blade', 0, 3, -1, 9, 1],
  ['Balrog Spear', 10, 4, -1, 2, 0], ['Barbed Club', 0, 2, -1, 0, 0], ['Bardiche', 10, 6, -1, 8, 0], ['Bastard Sword', 10, 3, -1, 9, 1], ['Battle Axe', 10, 6, -1, 0, 1], ['Battle Cestus', -10, 1, 1, 0, 0],
  ['Battle Dart', 0, 4, -1, 3, 0], ['Battle Hammer', 20, 2, -1, 0, 1], ['Battle Scythe', -10, 6, -1, 8, 1], ['Battle Staff', 0, 6, -1, 0, 1], ['Battle Sword', 0, 2, -1, 9, 1], ['Bearded Axe', 0, 6, -1, 0, 1],
  ['Bec-de-Corbin', 0, 6, -1, 8, 1], ['Berserker Axe', 0, 2, -1, 0, 1], ['Bill', 0, 6, -1, 8, 1], ['Blade Bow', -10, 7, -1, 1, 0], ['Blade Talons', -20, 1, 1, 0, 0], ['Blade', -10, 4, -1, 0, 0],
  ['Bone Knife', -20, 4, -1, 0, 0], ['Bone Wand', -20, 2, -1, 0, 0], ['Brandistock', -20, 5, -1, 8, 1], ['Broad Axe', 0, 6, -1, 0, 1], ['Broad Sword', 0, 2, -1, 9, 1], ['Burnt Wand', 0, 2, -1, 0, 0],
  ['Caduceus', -10, 2, -1, 0, 1], ['Cedar Bow', 0, 7, -1, 1, 0], ['Cedar Staff', 10, 6, -1, 0, 1], ['Ceremonial Bow', 10, 7, 0, 1, 0], ['Ceremonial Javelin', -10, 4, 0, 2, 0], ['Ceremonial Pike', 20, 5, 0, 8, 1],
  ['Ceremonial Spear', 0, 5, 0, 8, 1], ['Cestus', 0, 1, 1, 0, 0], ['Champion Axe', -10, 6, -1, 0, 1], ['Champion Sword', -10, 3, -1, 9, 1], ['Chu-Ko-Nu', -60, 8, -1, 1, 0], ['Cinquedeas', -20, 4, -1, 0, 0],
  ['Clasped Orb', 0, 2, 6, 0, 0], ['Claws', -10, 1, 1, 0, 0], ['Claymore', 10, 3, -1, 9, 1], ['Cleaver', 10, 2, -1, 0, 1], ['Cloudy Sphere', 0, 2, 6, 0, 0], ['Club', -10, 2, -1, 0, 0], ['Colossus Blade', 5, 3, -1, 9, 1],
  ['Colossus Crossbow', 10, 8, -1, 1, 0], ['Colossus Sword', 10, 3, -1, 9, 1], ['Colossus Voulge', 10, 6, -1, 8, 1], ['Composite Bow', -10, 7, -1, 1, 0], ['Conquest Sword', 0, 2, -1, 9, 1], ['Crossbow', 0, 8, -1, 1, 0],
  ['Crowbill', -10, 2, -1, 0, 1], ['Crusader Bow', 10, 7, -1, 1, 0], ['Cryptic Axe', 10, 6, -1, 8, 1], ['Cryptic Sword', -10, 2, -1, 9, 1], ['Crystal Sword', 0, 2, -1, 9, 1], ['Crystalline Globe', -10, 2, 6, 0, 0],
  ['Cudgel', -10, 2, -1, 0, 0], ['Cutlass', -30, 2, -1, 9, 0], ['Dacian Falx', 10, 3, -1, 9, 1], ['Dagger', -20, 4, -1, 0, 0], ['Decapitator', 10, 6, -1, 0, 1], ['Demon Crossbow', -60, 8, -1, 1, 0],
  ['Demon Heart', 0, 2, 6, 0, 0], ['Devil Star', 10, 2, -1, 0, 0], ['Diamond Bow', 0, 7, -1, 1, 0], ['Dimensional Blade', 0, 2, -1, 9, 1], ['Dimensional Shard', 10, 2, 6, 0, 0], ['Dirk', 0, 4, -1, 0, 0],
  ['Divine Scepter', -10, 2, -1, 0, 1], ['Double Axe', 10, 2, -1, 0, 1], ['Double Bow', -10, 7, -1, 1, 0], ['Eagle Orb', -10, 2, 6, 0, 0], ['Edge Bow', 5, 7, -1, 1, 0], ['Elder Staff', 0, 6, -1, 0, 1],
  ['Eldritch Orb', -10, 2, 6, 0, 0], ['Elegant Blade', -10, 2, -1, 9, 0], ['Espandon', 0, 3, -1, 9, 0], ['Ettin Axe', 10, 2, -1, 0, 1], ['Executioner Sword', 10, 3, -1, 9, 1], ['Falcata', 0, 2, -1, 9, 0],
  ['Falchion', 20, 2, -1, 9, 0], ['Fanged Knife', -20, 4, -1, 0, 0], ['Fascia', 10, 1, 1, 0, 0], ['Feral Axe', -15, 6, -1, 0, 1], ['Feral Claws', -20, 1, 1, 0, 0], ['Flail', -10, 2, -1, 0, 1],
  ['Flamberge', -10, 3, -1, 9, 1], ['Flanged Mace', 0, 2, -1, 0, 0], ['Flying Axe', 10, 2, -1, 3, 0], ['Francisca', 10, 2, -1, 3, 0], ['Fuscina', 0, 5, -1, 8, 1], ['Ghost Glaive', 20, 4, -1, 2, 0],
  ['Ghost Spear', 0, 5, -1, 8, 1], ['Ghost Wand', 10, 2, -1, 0, 0], ['Giant Axe', 10, 6, -1, 0, 1], ['Giant Sword', 0, 3, -1, 9, 1], ['Giant Thresher', -10, 6, -1, 8, 1], ['Gladius', 0, 2, -1, 9, 0],
  ['Glaive', 20, 4, -1, 2, 0], ['Glorious Axe', 10, 6, -1, 0, 1], ['Glowing Orb', -10, 2, 6, 0, 0], ['Gnarled Staff', 10, 6, -1, 0, 1], ['Gorgon Crossbow', 0, 8, -1, 1, 0], ['Gothic Axe', -10, 6, -1, 0, 1],
  ['Gothic Bow', 10, 7, -1, 1, 0], ['Gothic Staff', 0, 6, -1, 0, 1], ['Gothic Sword', 10, 3, -1, 9, 1], ['Grand Matron Bow', 10, 7, 0, 1, 0], ['Grand Scepter', 10, 2, -1, 0, 0], ['Grave Wand', 0, 2, -1, 0, 0],
  ['Great Axe', -10, 6, -1, 0, 1], ['Great Bow', -10, 7, -1, 1, 0], ['Great Maul', 20, 6, -1, 0, 1], ['Great Pilum', 0, 4, -1, 2, 0], ['Great Poleaxe', 0, 6, -1, 8, 1], ['Great Sword', 10, 3, -1, 9, 1],
  ['Greater Claws', -20, 1, 1, 0, 0], ['Greater Talons', -30, 1, 1, 0, 0], ['Grim Scythe', -10, 6, -1, 8, 1], ['Grim Wand', 0, 2, -1, 0, 0], ['Halberd', 0, 6, -1, 8, 1], ['Hand Axe', 0, 2, -1, 0, 0],
  ['Hand Scythe', -10, 1, 1, 0, 0], ['Harpoon', -10, 4, -1, 2, 0], ['Hatchet Hands', 10, 1, 1, 0, 0], ['Hatchet', 0, 2, -1, 0, 0], ['Heavenly Stone', -10, 2, 6, 0, 0], ['Heavy Crossbow', 10, 8, -1, 1, 0],
  ['Highland Blade', -5, 3, -1, 9, 1], ['Holy Water Sprinkler', 10, 2, -1, 0, 0], ["Hunter's Bow", -10, 7, -1, 1, 0], ['Hurlbat', -10, 2, -1, 3, 0], ['Hydra Bow', 10, 7, -1, 1, 0], ['Hydra Edge', 10, 2, -1, 9, 0],
  ['Hyperion Javelin', -10, 4, -1, 2, 0], ['Hyperion Spear', -10, 5, -1, 8, 0], ['Jagged Star', 10, 2, -1, 0, 0], ["Jared's Stone", 10, 2, 6, 0, 0], ['Javelin', -10, 4, -1, 2, 0], ['Jo Staff', -10, 6, -1, 0, 0],
  ['Katar', -10, 1, 1, 0, 0], ['Knout', -10, 2, -1, 0, 1], ['Kris', -20, 4, -1, 0, 0], ['Lance', 20, 5, -1, 8, 1], ['Large Axe', -10, 6, -1, 0, 1], ['Large Siege Bow', 10, 7, -1, 1, 0], ['Legend Spike', -10, 4, -1, 0, 0],
  ['Legend Sword', -15, 3, -1, 9, 0], ['Legendary Mallet', 20, 2, -1, 0, 1], ['Lich Wand', -20, 2, -1, 0, 0], ['Light Crossbow', -10, 8, -1, 1, 0], ['Lochaber Axe', 10, 6, -1, 8, 0], ['Long Battle Bow', 10, 7, -1, 1, 0],
  ['Long Bow', 0, 7, -1, 1, 0], ['Long Staff', 0, 6, -1, 0, 0], ['Long Sword', -10, 2, -1, 9, 1], ['Long War Bow', 10, 7, -1, 1, 0], ['Mace', 0, 2, -1, 0, 0], ['Maiden Javelin', -10, 4, 0, 2, 0],
  ['Maiden Pike', 10, 5, 0, 8, 1], ['Maiden Spear', 0, 5, 0, 8, 1], ['Mancatcher', -20, 5, -1, 8, 1], ['Martel de Fer', 20, 6, -1, 0, 1], ['Matriarchal Bow', -10, 7, 0, 1, 0], ['Matriarchal Javelin', -10, 4, 0, 2, 0],
  ['Matriarchal Pike', 20, 5, 0, 8, 1], ['Matriarchal Spear', 0, 5, 0, 8, 1], ['Maul', 10, 6, -1, 0, 1], ['Mighty Scepter', 0, 2, -1, 0, 0], ['Military Axe', -10, 6, -1, 0, 1], ['Military Pick', -10, 2, -1, 0, 1],
  ['Mithril Point', 0, 4, -1, 0, 0], ['Morning Star', 10, 2, -1, 0, 0], ['Mythical Sword', 0, 2, -1, 9, 0], ['Naga', 0, 2, -1, 0, 1], ['Ogre Axe', 0, 6, -1, 8, 0], ['Ogre Maul', 10, 6, -1, 0, 1],
  ['Partizan', 10, 6, -1, 8, 1], ['Pellet Bow', -10, 8, -1, 1, 0], ['Petrified Wand', 10, 2, -1, 0, 0], ['Phaseblade', -30, 2, -1, 9, 1], ['Pike', 20, 5, -1, 8, 1], ['Pilum', 0, 4, -1, 2, 0], ['Poignard', -20, 4, -1, 0, 0],
  ['Poleaxe', 10, 6, -1, 8, 1], ['Polished Wand', 0, 2, -1, 0, 0], ['Quarterstaff', 0, 6, -1, 0, 0], ['Quhab', 0, 1, 1, 0, 0], ['Razor Bow', -10, 7, -1, 1, 0], ['Reflex Bow', 10, 7, 0, 1, 0],
  ['Reinforced Mace', 0, 2, -1, 0, 0], ['Repeating Crossbow', -40, 8, -1, 1, 0], ['Rondel', 0, 4, -1, 0, 0], ['Rune Bow', 0, 7, -1, 1, 0], ['Rune Scepter', 0, 2, -1, 0, 0], ['Rune Staff', 20, 6, -1, 0, 1],
  ['Rune Sword', -10, 2, -1, 9, 1], ['Runic Talons', -30, 1, 1, 0, 0], ['Sabre', -10, 2, -1, 9, 0], ['Sacred Globe', -10, 2, 6, 0, 0], ['Scepter', 0, 2, -1, 0, 0], ['Scimitar', -20, 2, -1, 9, 0],
  ['Scissors Katar', -10, 1, 1, 0, 0], ['Scissors Quhab', 0, 1, 1, 0, 0], ['Scissors Suwayyah', 0, 1, 1, 0, 0], ['Scourge', -10, 2, -1, 0, 1], ['Scythe', -10, 6, -1, 8, 1], ['Seraph Rod', 10, 2, -1, 0, 0],
  ['Shadow Bow', 0, 7, -1, 1, 0], ['Shamshir', -10, 2, -1, 9, 0], ['Shillelagh', 0, 6, -1, 0, 1], ['Short Battle Bow', 0, 7, -1, 1, 0], ['Short Bow', 5, 7, -1, 1, 0], ['Short Siege Bow', 0, 7, -1, 1, 0],
  ['Short Spear', 10, 4, -1, 2, 0], ['Short Staff', -10, 6, -1, 0, 0], ['Short Sword', 0, 2, -1, 9, 0], ['Short War Bow', 0, 7, -1, 1, 0], ['Siege Crossbow', 0, 8, -1, 1, 0], ['Silver-edged Axe', 0, 6, -1, 0, 1],
  ['Simbilan', 10, 4, -1, 2, 0], ['Small Crescent', 10, 2, -1, 0, 1], ['Smoked Sphere', 0, 2, 6, 0, 0], ['Sparkling Ball', 0, 2, 6, 0, 0], ['Spear', -10, 5, -1, 8, 0], ['Spetum', 0, 5, -1, 8, 1],
  ['Spiculum', 20, 4, -1, 2, 0], ['Spider Bow', 5, 7, -1, 1, 0], ['Spiked Club', 0, 2, -1, 0, 0], ['Stag Bow', 0, 7, 0, 1, 0], ['Stalagmite', 10, 6, -1, 0, 0], ['Stiletto', -10, 4, -1, 0, 0],
  ['Stygian Pike', 0, 5, -1, 8, 1], ['Stygian Pilum', 0, 4, -1, 2, 0], ['Suwayyah', 0, 1, 1, 0, 0], ['Swirling Crystal', 10, 2, 6, 0, 0], ['Tabar', 10, 6, -1, 0, 1], ['Thresher', -10, 6, -1, 8, 1],
  ['Throwing Axe', 10, 2, -1, 3, 0], ['Throwing Knife', 0, 4, -1, 3, 0], ['Throwing Spear', -10, 4, -1, 2, 0], ['Thunder Maul', 20, 6, -1, 0, 1], ['Tomahawk', 0, 2, -1, 0, 0], ['Tomb Wand', -20, 2, -1, 0, 0],
  ['Trident', 0, 5, -1, 8, 1], ['Truncheon', -10, 2, -1, 0, 0], ['Tulwar', 20, 2, -1, 9, 0], ['Tusk Sword', 0, 3, -1, 9, 1], ['Twin Axe', 10, 2, -1, 0, 1], ['Two-Handed Sword', 0, 3, -1, 9, 0],
  ['Tyrant Club', 0, 2, -1, 0, 0], ['Unearthed Wand', 0, 2, -1, 0, 0], ['Vortex Orb', 0, 2, 6, 0, 0], ['Voulge', 0, 6, -1, 8, 1], ['Walking Stick', -10, 6, -1, 0, 0], ['Wand', 0, 2, -1, 0, 0],
  ['War Axe', 0, 2, -1, 0, 1], ['War Club', 10, 6, -1, 0, 0], ['War Dart', -20, 4, -1, 3, 0], ['War Fist', 10, 1, 1, 0, 0], ['War Fork', -20, 5, -1, 8, 1], ['War Hammer', 20, 2, -1, 0, 1],
  ['War Javelin', -10, 4, -1, 2, 0], ['War Pike', 20, 5, -1, 8, 1], ['War Scepter', -10, 2, -1, 0, 1], ['War Scythe', -10, 6, -1, 8, 1], ['War Spear', -10, 5, -1, 8, 0], ['War Spike', -10, 2, -1, 0, 1],
  ['War Staff', 20, 6, -1, 0, 1], ['War Sword', 0, 2, -1, 9, 0], ['Ward Bow', 0, 7, -1, 1, 0], ['Winged Axe', -10, 2, -1, 3, 0], ['Winged Harpoon', -10, 4, -1, 2, 0], ['Winged Knife', -20, 4, -1, 3, 0],
  ['Wrist Blade', 0, 1, 1, 0, 0], ['Wrist Spike', -10, 1, 1, 0, 0], ['Wrist Sword', -10, 1, 1, 0, 0], ['Yari', 0, 5, -1, 8, 1], ['Yew Wand', 10, 2, -1, 0, 0], ['Zweihander', -10, 3, -1, 9, 1]];

// it appears each character class has two values that are used for FramesPerDirection?
const weaponType = [
  [[13, 13], [11, 12], [12, 12], [16, 16], [15, 15], [14, 14], [16, 16], 0, 0, 0, 'unarmed'],
  [[0, 0], [11, 12], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], 0, 0, 0, 'claw'],
  [[16, 16], [15, 15], [16, 16], [19, 19], [19, 19], [15, 15], [20, 20], 0, 0, [16, 16], 'one-handed swinging weapon'],
  [[20, 20], [23, 23], [18, 18], [21, 21], [23, 23], [18, 19], [24, 24], 0, 0, [16, 16], 'two-handed sword'],
  [[15, 15], [15, 15], [16, 16], [19, 19], [19, 19], [17, 17], [19, 19], 0, [16, 16], 0, 'one-handed thrusting weapon'],
  [[18, 18], [23, 23], [19, 19], [23, 23], [24, 24], [20, 20], [23, 23], 0, [16, 16], 0, 'spear'],
  [[20, 20], [19, 19], [19, 19], [17, 17], [20, 20], [18, 18], [18, 18], 0, [16, 16], 0, 'two-handed weapon'],
  [[14, 14], [16, 16], [15, 15], [16, 16], [18, 18], [16, 16], [17, 17], [15, 15], 0, 0, 'bow'],
  [[20, 20], [21, 21], [20, 20], [20, 20], [20, 20], [20, 20], [20, 20], 0, 0, 0, 'crossbow'],
  [16, 16, 16, 18, 20, 16, 20],
];

const sequences = [[0, 0, 0, 0, 21, 24, 0, 0, 0], [0, 0, 0, 0, 18, 21, 0, 0, 0], [12, 12, 16, 0, 0, 0, 0, 0, 0], [0, 0, 17, 17, 17, 0, 0, 0, 0], [0, 0, 12, 0, 12, 0, 0, 0, 0]];

const startframe = [1, 0, 2, 2, 2, 2, 2, 0, 0];


let outputFPA = '';
let outputFreq = '';
let outputMax = '';
// EIAS = effective ias
// WSM = weapon speed modifier
let primaryIAS; let primaryEIAS; let primaryWSM;

const fanaValue = 0; // note: it looks like he had the level > ias hardcoded as values on the select
const frenzyValue = 0;
const wolfValue = 0;
const tempoValue = 0;
const holyfrostValue = 0;

let limit = 1;

const wereform = ['unchanged', 'Werebear', 'Werewolf'];


let frames;
let start;
const statischFana = true; const statischFrost = true; const statischIAS = true;
const mIAS = 1;
const statischWaffe = true; const statischZweitwaffe = true; const bpWindow = true;
let secondaryWSM; let secondaryIAS; let secondaryEIAS; let SIAS;

let rollback1; let rollback2; let rollback3; let rollback4; let rollback5; let rollbackframe;
let tempSkill;

let tempWaffe; let tempZweitwaffe; let tempForm; let tempBarbschwert; const grenze = 1; let cap = 1;
const breakpoints = []; const breakpoints1 = []; const breakpoints2 = [];

const breakpointsAPS = [];


// name, baseSpeed, type (cor. to weaponTypes),
// ['Hydra Bow', 10, 7, -1, 1, 0]


function computeValues() {
  let result;
  let temp; let temp2;
  computeSIAS();
  computeEIAS();
  computeWSM();
  let acceleration = Math.max(Math.min(100 + SIAS + primaryEIAS - primaryWSM, 175), 15);
  const acceleration2 = Math.max(Math.min(100 + SIAS + secondaryEIAS - secondaryWSM, 175), 15); start = 0;
  // (amazon or sorceress) and the second part matches a bunch of skills
  // ["Standard", "Strafe", "Fend", "Tiger Strike", "Cobra Strike", "Phoenix Strike", "Concentrate", "Berserk", "Bash", "Stun", "Zeal", "Feral Rage", "Fury", "Sacrifice", "Vengeance", "Conversion"]
  if (((charValue == 0) || (charValue == 6)) && (skills[skillValue][2] < 2)) {
    start = startframe[weapons[weaponValue][2]];
  }
  // ["Strafe", "Fend", "Tiger Strike", "Cobra Strike", "Phoenix Strike", "Concentrate", "Berserk", "Bash", "Stun", "Zeal", "Feral Rage", "Fury", "Sacrifice", "Vengeance", "Conversion"]
  //  ["Hunger", "Rabies"]
  // and NOT ["Strafe", "Fend", "Dragon Talon", "Zeal", "Fury"]
  if (((skills[skillValue][2] == 0) || (skills[skillValue][2] == 6)) && (skills[skillValue][4] == 100)) {
    // get weapontype set for this character and class, select first value
    frames = weaponType[weapons[weaponValue][2]][charValue][0];
    // but if it's a 2h sword,
    if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) {
      frames = 16;
    }
    result = computeFPA(frames, acceleration, start);
  }

  // Standard and NOT ["Strafe", "Fend", "Dragon Talon", "Zeal", "Fury"] ??
  if ((skills[skillValue][2] == 1) && (skills[skillValue][4] == 100)) {
    // get weapontype set for this character and class, select first value
    frames = weaponType[weapons[weaponValue][2]][charValue][0];
    // 2h sword and barb sword = 1 ??
    if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) {
      frames = 16;
    }
    result = computeFPA(frames, acceleration, start);

    // if our result is better than 175 acceleration??
    if (result > computeFPA(frames, 175, start)) { limit = 0; }

    // if not werebear
    if (charFormValue == 0) {
      temp = result;
      frames = weaponType[weapons[weaponValue][2]][charValue][1];

      if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) {
        frames = 16;
      }
      result = computeFPA(frames, acceleration, start);
      if (result > computeFPA(frames, 175, start)) {
        limit = 0;
      }
      result = (result + temp) / 2;
    }
    // not sure how this could be 9 ??
    if (charValue == 9) {
      result /= 2;
    }

    // secondary weapon
    if (secondWeaponValue > 0) {
      temp = result;
      result = computeFPA(12, acceleration2, 0);
      if (result > computeFPA(12, 175, 0)) {
        limit = 0;
      }
      result = (result + temp) / 2;
    }
    if (limit == 1) {
      outputMax = 'further IAS useless';
    }
    limit = 1;
  }
  // See below
  if ((skills[skillValue][2] >= 2) && (skills[skillValue][2] <= 5) && (skills[skillValue][4] == 100)) {
    // Throw
    if (skills[skillValue][2] == 2) {
      frames = weaponType[9][charValue];
    }
    // Dragon Tail
    if (skills[skillValue][2] == 3) {
      frames = 13;
    }
    // Smite
    if (skills[skillValue][2] == 4) {
      frames = 12;
      // Laying Traps
    } if (skills[skillValue][2] == 5) {
      frames = 8;
    }
    result = computeFPA(frames, acceleration, start);
  }

  // not whirlwind
  // frenzy and a few others
  if ((skills[skillValue][2] == 7) && (skillValue != 19) && (skills[skillValue][4] == 100)) {
    frames = sequences[skills[skillValue][3]][weapons[weaponValue][2]];
    // some assasin skills
    if ((skillValue > 8) && (skillValue < 13) && (secondWeaponValue > 0)) { frames = 16; }
    // merc - town guard
    if (charValue == 8) { frames = 14; }
    start = 0;
    result = computeFPA(frames, acceleration, start);
    result++;
    // Jab and not a merc
    if ((skillValue == 3) && (charValue < 7)) { result = parseInt(100 * result / 3) / 100; }
    // merc - town guard
    if (charValue == 8) { result /= 2; }
    // some barb skills
    if ((skillValue > 15) && (skillValue < 19)) { result /= 2; }
    // some assassin skills with second weapon
    if ((skillValue > 8) && (skillValue < 13) && (secondWeaponValue > 0)) { result /= 2; }
  }
  // Whirlwind
  if (skillValue == 19) {
    frames = weaponType[weapons[weaponValue][2]][charValue][0];
    // 2h sword
    if (weapons[weaponValue][2] == 3) { frames = 16; }

    acceleration = 100 + parseInt(weapon1IAS) - parseInt(weapons[weaponValue][1]);

    temp = computeFPA(frames, acceleration, start);
    result = whirlwind(temp);
    if (result > 4) { limit = 0; }

    if (weaponValue == 0) {
      result = 10; outputMax = 'further IAS useless';
    }
    if (secondWeaponValue > 0) {
      temp2 = result;
      frames = weaponType[weapons[secondWeaponValue][2]][charValue][0];
      if (weapons[secondWeaponValue][2] == 3) { frames = 16; }
      acceleration = 100 + parseInt(weapon2IAS) - parseInt(weapons[secondWeaponValue][1]);
      temp = computeFPA(frames, acceleration, start);
      result = whirlwind(temp);
      if (result > 4) { limit = 0; } result = (result + temp2) / 4;
    }
    if (limit == 1) { outputMax = 'further IAS useless'; }
    limit = 1;
  }

  // ["Dragon Talon", "Zeal", "Fury"]
  if (skills[skillValue][4] == 0) {
    // dragon talon
    if (skillValue == 14) {
      rollback1 = computeFPA(4, acceleration, 0); rollback1++; rollback3 = computeFPA(13, acceleration, 0);
      if (rollback3 == 7) {
        outputMax = 'further IAS useless';
      }
      outputFPA = `${rollback1}/${rollback1}/${rollback1}/${rollback1}/${rollback3} frames per attack`;
      outputFreq = `${parseInt(100 * 25 / ((rollback1 * 4 + rollback3) / 5)) / 100} attacks per second`;
    }
    // fury
    if (skillValue == 29) {
      frames = weaponType[weapons[weaponValue][2]][charValue][0];
      rollback1 = computeFPA(frames, acceleration, 0);
      if (rollback1 > computeFPA(frames, 175, 0)) { limit = 0; }
      rollback1++;
      rollback3 = computeFPA(frames, acceleration, 1);
      if (rollback3 > computeFPA(frames, 175, 1)) { limit = 0; }
      if (limit == 1) {
        outputMax = 'further IAS useless';
      }
      limit = 1;
      outputFPA = `${rollback1}/${rollback1}/${rollback1}/${rollback1}/${rollback3} frames per attack`;
      outputFreq = `${parseInt(100 * 25 / ((rollback1 * 4 + rollback3) / 5)) / 100} attacks per second`;
    }
    // Zeal
    if (skillValue == 24) {
      frames = aktionsframe[weapons[weaponValue][2]][charValue];
      if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) {
        frames = 7;
      }
      rollback1 = computeFPA(frames, acceleration, start);
      if (rollback1 > computeFPA(frames, 175, start)) { limit = 0; }
      rollback1++;
      rollback2 = computeFPA(frames, acceleration, 0);
      if (rollback2 > computeFPA(frames, 175, 0)) { limit = 0; }
      rollback2++; frames = weaponType[weapons[weaponValue][2]][charValue][0];
      if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; }
      rollback3 = computeFPA(frames, acceleration, 0);
      if (rollback3 > computeFPA(frames, 175, 0)) { limit = 0; }
      if (limit == 1) { outputMax = 'further IAS useless'; }
      limit = 1;
      outputFPA = `${rollback1}/${rollback2}/${rollback2}/${rollback2}/${rollback3} frames per attack`;
      if (skillValue == 24) {
        outputFreq = `${parseInt(100 * 25 / ((rollback1 + rollback2 * 3 + rollback3) / 5)) / 100} attacks per second`;
      }
    }
  }
  // Strafe
  if (skills[skillValue][4] == 50) {
    frames = aktionsframe[weapons[weaponValue][2]][charValue];
    if (acceleration > 149) { acceleration = 149; }
    rollback1 = computeFPA(frames, acceleration, start);
    if (rollback1 > computeFPA(frames, 149, start)) { limit = 0; }
    rollback1++;
    rollbackframe = Math.floor(Math.floor((256 * start + Math.floor(256 * acceleration / 100) * rollback1) / 256) * skills[skillValue][4] / 100);
    rollback2 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback2 > computeFPA(frames, 149, rollbackframe)) { limit = 0; } rollback2++;
    rollbackframe = Math.floor(Math.floor((256 * rollbackframe + Math.floor(256 * acceleration / 100) * rollback2) / 256) * skills[skillValue][4] / 100);
    rollback3 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback3 > computeFPA(frames, 149, rollbackframe)) { limit = 0; } rollback3++;
    rollbackframe = Math.floor(Math.floor((256 * rollbackframe + Math.floor(256 * acceleration / 100) * rollback3) / 256) * skills[skillValue][4] / 100);
    rollback4 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback4 > computeFPA(frames, 149, rollbackframe)) { limit = 0; } rollback4++;
    frames = weaponType[weapons[weaponValue][2]][charValue][0];
    rollbackframe = Math.floor(Math.floor((256 * rollbackframe + Math.floor(256 * acceleration / 100) * rollback4) / 256) * skills[skillValue][4] / 100);
    rollback5 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback5 > computeFPA(frames, 149, rollbackframe)) { limit = 0; } if ((rollback2 == 5) && (rollback3 == 4)) {
      rollback3 = 5; rollback5 = 13;
    }
    if (limit == 1) { outputMax = 'further IAS useless'; }
    limit = 1;
    outputFPA = `${rollback1}/${rollback2}/${rollback3}/${rollback4}/${rollback5} frames per attack`;
    outputFreq = `${parseInt(100 * 25 / ((rollback1 + rollback2 + rollback3 * 4 + rollback4 * 3 + rollback5) / 10)) / 100} attacks per second`;
  }
  // Fend
  if (skills[skillValue][4] == 40) {
    frames = aktionsframe[weapons[weaponValue][2]][charValue]; rollback1 = computeFPA(frames, acceleration, start);
    if (rollback1 > computeFPA(frames, 175, start)) { limit = 0; }
    rollback1++;
    rollbackframe = Math.floor(Math.floor((256 * start + Math.floor(256 * acceleration / 100) * rollback1) / 256) * skills[skillValue][4] / 100);
    rollback2 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback2 > computeFPA(frames, 175, rollbackframe)) { limit = 0; }
    rollback2++;
    frames = weaponType[weapons[weaponValue][2]][charValue][0];
    rollbackframe = Math.floor(Math.floor((256 * rollbackframe + Math.floor(256 * acceleration / 100) * rollback2) / 256) * skills[skillValue][4] / 100); rollback3 = computeFPA(frames, acceleration, rollbackframe);
    if (rollback3 > computeFPA(frames, 175, rollbackframe)) { limit = 0; }
    if (limit == 1) { outputMax = 'further IAS useless'; }
    limit = 1;
    outputFPA = `${rollback1}/${rollback2}/${rollback3} frames per attack`; outputFreq = `${parseInt(100 * 25 / ((rollback1 + rollback2 + rollback3) / 2)) / 100} attacks per second`;
  }
  // ["Standard", "Throw", "Impale", "Jab", "Tiger Strike", "Cobra Strike", "Phoenix Strike", "Fists of Fire", "Claws of Thunder", "Blades of Ice", "Dragon Claw", "Dragon Tail", "Laying Traps",
  // "Double Swing", "Frenzy", "Double Throw", "Whirlwind", "Concentrate", "Berserk", "Bash", "Stun", "Smite", "Feral Rage", "Hunger", "Rabies", "Sacrifice", "Vengeance", "Conversion"]
  if (skills[skillValue][4] == 100) {
    outputFPA = `${result} frames per attack`; outputFreq = `${parseInt(100 * 25 / result) / 100} attacks per second`;
    if (charValue > 6) { outputFreq = `${parseInt(100 * 25 / (result + 2)) / 100} attacks per second`; }
    if (((charValue == 8) && (skillValue == 3)) || ((charValue == 9) && (skillValue == 0))) {
      outputFreq = `${parseInt(100 * 25 / (result + 1)) / 100} attacks per second`;
    }
    if ((charFormValue > 0) && (secondWeaponValue > 0) && (skillValue == 0)) {
      outputFPA = 'Calculation makes no sense'; outputFreq = '';
    }
  }

  console.log(outputFreq);
  console.log(outputFPA);
  console.log(outputMax);
}


function computeBreakpoints() {
  let result;
  let RBframe;
  let temp; let temp1;
  let OIAS = IASValue;
  const WIAS = weapon1IAS;
  /* if (bpWindow == false) { TabbpWindow.close(); }
          bpWindow = false;
          if ((charFormValue > 0) && ((weaponValue == 0) || ((secondWeaponValue > 0) && (skillValue == 0)))) { bpWindow = true; } */
  cap = 0;

  // not shape shifted
  if (charFormValue == 0) {
    while (breakpoints.length > 0) { breakpoints.length -= 1; }
    while (breakpoints1.length > 0) { breakpoints1.length -= 1; }
    while (breakpoints2.length > 0) { breakpoints2.length -= 1; }
    while (breakpointsAPS.length > 0) { breakpointsAPS.length -= 1; }
    temp1 = 0;

    if (((skills[skillValue][2] == 0) || (skills[skillValue][2] == 2) || (skills[skillValue][2] == 3) || (skills[skillValue][2] == 4) || (skills[skillValue][2] == 5)) && (skills[skillValue][4] == 100)) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        result = computeFPA(frames, i, start);
        if ((temp1 != result) && (i - 100 - SIAS + primaryWSM < 120)) {
          breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), result]; temp1 = result;
        }
      }
    }
    if ((skills[skillValue][2] == 1) && (secondWeaponValue == 0) && (skills[skillValue][4] == 100)) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        frames = weaponType[weapons[weaponValue][2]][charValue][0];
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; }
        result = computeFPA(frames, i, start);
        frames = weaponType[weapons[weaponValue][2]][charValue][1];
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; }
        temp = computeFPA(frames, i, start); result = (result + temp) / 2;
        if (charValue == 9) { result /= 2; }
        if ((temp1 != result) && (i - 100 - SIAS + primaryWSM < 120)) {
          breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), result]; temp1 = result;
        }
      }
    }
    if ((skills[skillValue][2] == 1) && (secondWeaponValue > 0) && (skills[skillValue][4] == 100)) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        frames = weaponType[weapons[weaponValue][2]][charValue][0];
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; } result = computeFPA(frames, i, 0);
        frames = weaponType[weapons[weaponValue][2]][charValue][1];
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; }
        temp = computeFPA(frames, i, 0);
        result = (result + temp) / 2;
        if ((temp1 != result) && (i - 100 - SIAS + primaryWSM < 120)) {
          breakpoints1[breakpoints1.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))) - primaryIAS, result]; temp1 = result;
        }
        if ((breakpoints1.length > 1) && (breakpoints1[1][0] < 0) && (breakpoints1[0][0] == 0)) {
          breakpoints1.reverse();
          breakpoints1.length -= 1;
          breakpoints1.reverse();
        }
        if ((breakpoints1.length > 0) && (breakpoints1[0][0] < 0)) { breakpoints1[0][0] = 0; }
      }
      temp1 = 0;
      for (i = Math.max(100 + SIAS - secondaryWSM, 15); i <= 175; i++) {
        result = computeFPA(12, i, 0); if ((temp1 != result) && (i - 100 - SIAS + secondaryWSM < 120)) { breakpoints2[breakpoints2.length] = [Math.ceil(120 * (i - 100 - SIAS + secondaryWSM) / (120 - (i - 100 - SIAS + secondaryWSM))) - secondaryIAS, result]; temp1 = result; }
        if ((breakpoints2.length > 1) && (breakpoints2[1][0] < 0) && (breakpoints2[0][0] == 0)) { breakpoints2.reverse(); breakpoints2.length -= 1; breakpoints2.reverse(); }
        if ((breakpoints2.length > 0) && (breakpoints2[0][0] < 0)) { breakpoints2[0][0] = 0; }
      } const IASmax1 = breakpoints1[breakpoints1.length - 1][0];
      const IASmax2 = breakpoints2[breakpoints2.length - 1][0];
      for (i = 0; i <= Math.max(IASmax1, IASmax2); i++) {
        if ((breakpoints1.length > 1) && (breakpoints1[1][0] == i)) { breakpoints1.reverse(); breakpoints1.length -= 1; breakpoints1.reverse(); }
        if ((breakpoints2.length > 1) && (breakpoints2[1][0] == i)) { breakpoints2.reverse(); breakpoints2.length -= 1; breakpoints2.reverse(); }
        if ((breakpoints1[0][0] == i) || (breakpoints2[0][0] == i)) { breakpoints[breakpoints.length] = [i, (breakpoints1[0][1] + breakpoints2[0][1]) / 2]; }
      }
    }
    if ((skills[skillValue][2] == 7) && (skillValue != 19)) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        result = computeFPA(frames, i, 0); result++;
        if ((skillValue == 3) && (charValue < 7)) { result = parseInt(100 * result / 3) / 100; }
        if (charValue == 8) { result /= 2; } if ((skillValue > 15) && (skillValue < 19)) { result /= 2; } if ((skillValue > 8) && (skillValue < 13) && (secondWeaponValue > 0)) { result /= 2; } if ((temp1 != result) && (i - 100 - SIAS + primaryWSM < 120)) { breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), result]; temp1 = result; }
      }
    } if (skillValue == 19) {
      for (i = 100 + primaryIAS - OIAS - primaryWSM; i <= 175; i++) {
        temp = computeFPA(frames, i, 0); result = whirlwind(temp);
        if (temp1 != result) { breakpoints[breakpoints.length] = [i - 100 + primaryWSM, result]; temp1 = result; }
      }
    }

    if (skills[skillValue][4] == 0) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        if (skillValue == 14) { frames = 4; }
        if (skillValue == 24) { frames = aktionsframe[weapons[weaponValue][2]][charValue]; }
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 7; }
        rollback1 = computeFPA(frames, i, start); rollback1++;
        rollback2 = computeFPA(frames, i, 0);
        rollback2++;
        if (skillValue == 14) { frames = 13; }
        if (skillValue == 24) { frames = weaponType[weapons[weaponValue][2]][charValue][0]; }
        if ((weapons[weaponValue][2] == 3) && (barbSwordValue == 1)) { frames = 16; }
        rollback3 = computeFPA(frames, i, 0);
        result = rollback1 + rollback2 + rollback3;
        if ((temp1 != result) && (i - 100 - SIAS + primaryWSM < 120)) {
          breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), `${rollback1}/${rollback2}/${rollback2}/${rollback2}/${rollback3}`];
          breakpointsAPS[breakpointsAPS.length] = parseInt(2500 / ((rollback1 + rollback2 * 3 + rollback3) / 5)) / 100; temp1 = result;
        }
      }
    }

    if (skills[skillValue][4] == 50) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 149; i++) {
        frames = aktionsframe[weapons[weaponValue][2]][charValue];
        rollback1 = computeFPA(frames, i, start);
        rollback1++;
        RBframe = Math.floor(Math.floor((256 * start + Math.floor(256 * i / 100) * rollback1) / 256) * skills[skillValue][4] / 100);
        rollback2 = computeFPA(frames, i, RBframe);
        rollback2++;
        RBframe = Math.floor(Math.floor((256 * RBframe + Math.floor(256 * i / 100) * rollback2) / 256) * skills[skillValue][4] / 100);
        rollback3 = computeFPA(frames, i, RBframe); rollback3++;
        RBframe = Math.floor(Math.floor((256 * RBframe + Math.floor(256 * i / 100) * rollback3) / 256) * skills[skillValue][4] / 100);
        rollback4 = computeFPA(frames, i, RBframe);
        rollback4++;
        frames = weaponType[weapons[weaponValue][2]][charValue][0];
        RBframe = Math.floor(Math.floor((256 * RBframe + Math.floor(256 * i / 100) * rollback4) / 256) * skills[skillValue][4] / 100);
        rollback5 = computeFPA(frames, i, RBframe);
        if ((rollback2 == rollback3) || (rollback3 == rollback4)) { result = rollback1 + rollback2 + rollback3 + rollback4 + rollback5; }
        if (temp1 != result) {
          breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), `${rollback1}/${rollback2}/${rollback3}/${rollback4}/${rollback5}`];
          breakpointsAPS[breakpointsAPS.length] = parseInt(2500 / ((rollback1 + rollback2 + rollback3 * 4 + rollback4 * 3 + rollback5) / 10)) / 100; temp1 = result;
        }
      }
    }
    if (skills[skillValue][4] == 40) {
      for (i = Math.max(100 + SIAS - primaryWSM, 15); i <= 175; i++) {
        frames = aktionsframe[weapons[weaponValue][2]][charValue];
        rollback1 = computeFPA(frames, i, start);
        rollback1++;
        RBframe = Math.floor(Math.floor((256 * start + Math.floor(256 * i / 100) * rollback1) / 256) * skills[skillValue][4] / 100);
        rollback2 = computeFPA(frames, i, RBframe);
        rollback2++;
        frames = weaponType[weapons[weaponValue][2]][charValue][0];
        RBframe = Math.floor(Math.floor((256 * RBframe + Math.floor(256 * i / 100) * rollback2) / 256) * skills[skillValue][4] / 100);
        rollback3 = computeFPA(frames, i, RBframe);
        result = rollback1 + rollback2 + rollback3;
        if (temp1 != result) {
          breakpoints[breakpoints.length] = [Math.ceil(120 * (i - 100 - SIAS + primaryWSM) / (120 - (i - 100 - SIAS + primaryWSM))), `${rollback1}/${rollback2}/${rollback3}`];
          breakpointsAPS[breakpointsAPS.length] = parseInt(2500 / ((rollback1 + rollback2 + rollback3) / 3)) / 100; temp1 = result;
        }
      }
    }
    console.log('IAS', 'attack speed [ticks]', 'attacks per second');

    let aidel = 0;
    if (charValue > 6) { aidel = 2; }
    if (((charValue == 8) && (skillValue == 3)) || ((charValue == 9) && (skillValue == 0))) { aidel = 1; }
    if (skills[skillValue][4] == 100) {
      for (i = 0; i < breakpoints.length; i++) {
        console.log(breakpoints[i][0], breakpoints[i][1], parseInt(2500 / (aidel + breakpoints[i][1])) / 100);
      }
    }
    if (skills[skillValue][4] != 100) {
      for (i = 0; i < breakpoints.length; i++) {
        console.log(breakpoints[i][0], breakpoints[i][1], breakpointsAPS[i]);
      }
    }
  }

  // were forms
  if (charFormValue > 0) {
    while (parseInt(OIAS / 5) != parseFloat(OIAS / 5)) { OIAS--; }
    while (breakpoints.length > 0) { breakpoints.length -= 1; }
    while (breakpoints2.length > 0) { breakpoints2.length -= 1; }
    if ((weaponValue == 0) || ((secondWeaponValue > 0) && (skillValue == 0))) {
      if ((skillValue == 0) && (secondWeaponValue > 0)) {
        alert('There&lsquo;s a problem regarding the standard attack while using two weapons in wereform, so that speed won&lsquo;t be calculated here.');
      }
      if (weaponValue == 0) {
        alert('Please choose a weapon to use.');
      }
    } else {
      frames = weaponType[weapons[weaponValue][2]][charValue][0];
      if (weapons[weaponValue][2] == 3) { frames = weaponType[2][charValue][0]; }
      let AnimSpeed = 256;
      if (weapons[weaponValue][2] == 1) { AnimSpeed = 208; }

      for (i = 0; i <= 24; i++) {
        for (j = 0; j <= 14; j++) {
          if (skillValue == 26) {
            breakpoints[breakpoints.length] = Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames
                            / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100))
                            + Math.ceil((256 * 13 - Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100)))
                                * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100) * Math.ceil(256 * 7
                                    / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100
                                        - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100))) / (2 * Math.floor(Math.floor(256 * 9
                                            / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100
                                                - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100))) - 1;
            if ((OIAS > 70) && (j == 0)) {
              breakpoints2[breakpoints2.length] = Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100)) + Math.ceil((256 * 13 - Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100) * Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100))) / (2 * Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100))) - 1;
            }
          }
          if (skillValue == 29) {
            temp = (Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100)) * 4 + Math.ceil(256 * 13 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100)) - 1) / 5; if (parseInt(temp) == parseFloat(temp)) { temp += '.0'; } breakpoints[breakpoints.length] = temp; if ((OIAS > 70) && (j == 0)) {
              temp = (Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100)) * 4 + Math.ceil(256 * 13 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100)) - 1) / 5;
              if (parseInt(temp) == parseFloat(temp)) { temp += '.0'; }
              breakpoints2[breakpoints2.length] = temp;
            }
          } if ((skillValue != 26) && (skillValue != 29)) {
            var tempframe = 12; var tempframe2 = 10;
            if (charFormValue == 2) { tempframe = 13; tempframe2 = 9; }
            if (skills[skillValue][2] == 6) { tempframe = 10; }
            breakpoints[breakpoints.length] = Math.ceil(256 * tempframe / Math.floor(Math.floor(256 * tempframe2 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * AnimSpeed / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + 5 * j) / (120 + (5 * i + 5 * j))), 15), 175) / 100)) - 1;
            if ((OIAS > 70) && (j == 0)) {
              breakpoints2[breakpoints2.length] = Math.ceil(256 * tempframe / Math.floor(Math.floor(256 * tempframe2 / Math.floor(256 * frames / Math.floor((100 + 5 * i - primaryWSM) * AnimSpeed / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (5 * i + parseInt(OIAS)) / (120 + (5 * i + parseInt(OIAS)))), 15), 175) / 100)) - 1;
            }
          }
        }
      }
      for (k = 0; k <= 14; k++) {
        if ((parseInt(WIAS / 5) != parseFloat(WIAS / 5)) && (skillValue == 26)) { breakpoints[breakpoints.length] = Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 15), 175) / 100)) + Math.ceil((256 * 13 - Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 15), 175) / 100) * Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 15), 175) / 100))) / (2 * Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 15), 175) / 100))) - 1; }
        if ((parseInt(WIAS / 5) != parseFloat(WIAS / 5)) && (skillValue == 29)) {
          temp = (Math.ceil(256 * 7 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 175) / 100)) * 4 + Math.ceil(256 * 13 / Math.floor(Math.floor(256 * 9 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * 256 / 100))) * Math.min(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 175) / 100)) - 1) / 5;
          if (parseInt(temp) == parseFloat(temp)) { temp += '.0'; } breakpoints[breakpoints.length] = temp;
        }
        if ((parseInt(WIAS / 5) != parseFloat(WIAS / 5)) && (skillValue != 26) && (skillValue != 29)) {
          breakpoints[breakpoints.length] = Math.ceil(256 * tempframe / Math.floor(Math.floor(256 * tempframe2 / Math.floor(256 * frames / Math.floor((100 + parseInt(WIAS) - primaryWSM) * AnimSpeed / 100))) * Math.min(Math.max(100 - primaryWSM + SIAS + Math.floor(120 * (parseInt(WIAS) + 5 * k) / (120 + (parseInt(WIAS) + 5 * k))), 15), 175) / 100)) - 1;
        }
      }
      /* console.log("IAS", "attack speed [ticks]", "attacks per second")
                              TabbpWindow = bpWindow.open('', 'Tabelle', 'width=900,height=650,screenX=110,screenY=80,dependent=yes,scrollbars=yes');


                              TabbpWindow.document.write('</table><p align="center">Your primary weapon&rsquo;s WIAS is plotted vertically, your equipment&rsquo;s IAS is plotted horizontally.</p>');
                              TabbpWindow.document.write('<table style="limit-collapse:collapse" align="center" limit="1" cellpadding="0" cellspacing="0"><tr><td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="wertitle" width="60" align="center">---</td>');
                              for (i = 0; i <= 14; i++) { TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="wertitle" width="40" align="center">${5 * i}</td>`); }

                              if (OIAS > 70) {
                                  TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="wertitle" width="40" align="center">${OIAS}</td>`);
                              }
                              TabbpWindow.document.write('</tr><tr>');
                              for (j = 0; j <= 24; j++) {
                                  TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="wertitle" align="center">${5 * j}</td>`);
                                  for (i = 15 * j; i <= 15 * (j + 1) - 1; i++) {
                                      if ((OIAS == (i - 15 * j) * 5) && (WIAS == j * 5)) {
                                          TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="auswahl" align="center"><b>${breakpoints[i]}</b></td>`);
                                      } else if ((OIAS == (i - 15 * j) * 5) || (WIAS == j * 5)) {
                                          TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="iaswahl" align="center">${breakpoints[i]}</td>`);
                                      } else {
                                          TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" align="center">${breakpoints[i]}</td>`);
                                      }
                                  }
                                  if (OIAS > 70) {
                                      TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="iaswahl" align="center">${breakpoints2[j]}</td>`);
                                  }
                                  if (j < 24) {
                                      TabbpWindow.document.write('</tr><tr>');
                                  }
                                  if ((parseInt(WIAS / 5) != parseFloat(WIAS / 5)) && (WIAS > j * 5) && (WIAS < (j + 1) * 5)) {
                                      TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="wertitle" align="center">${WIAS}</td>`);

                                      for (k = 0; k <= 14; k++) {
                                          if (OIAS == k * 5) {
                                              TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="auswahl" align="center"><b>${breakpoints[breakpoints.length - 15 + k]}</b></td>`);
                                          } else {
                                              TabbpWindow.document.write(`<td style="limit-width:1px; limit-style:solid; limit-color:#FFFFFF" class="iaswahl" align="center">${breakpoints[breakpoints.length - 15 + k]}</td>`);
                                          }
                                      }
                                      TabbpWindow.document.write('</tr><tr>');
                                  }
                              }
                              TabbpWindow.document.write('</tr></table><script type="text/javascript">bpWindow.setTimeout("stop()", 1000);</script');

                              TabbpWindow.document.write('>'); */
    }
  } cap = 1;
}


// computeFPA - Frames Per Attack?
function computeFPA(FramesPerDirection, Acceleration, StartingFrame) {
  // let Acceleration;
  let AnimationSpeed = 256;
  // if class = assassin and using claw then 208
  // weapon stats look like this: ['[unarmed]', 0, 0, -1, 0, 0] not sure what they mean atm
  // ["Battle Cestus", "Blade Talons", "Cestus", "Claws", "Fascia", "Feral Claws", "Greater Claws", "Greater Talons", "Hand Scythe", "Hatchet Hands", "Katar", "Quhab", "Runic Talons", "Scissors Katar", "Scissors Quhab", "Scissors Suwayyah", "Suwayyah", "War Fist", "Wrist Blade", "Wrist Spike", "Wrist Sword"]
  if ((charValue == 1) && (weapons[weaponValue][2] == 1)) { AnimationSpeed = 208; }

  // 3:  ["Dragon Tail", "Dragon Talon"]
  // 7:  ["Impale", "Jab", "Fists of Fire", "Claws of Thunder", "Blades of Ice", "Dragon Claw", "Double Swing", "Frenzy", "Double Throw", "Whirlwind"]
  // selectedSkill 19 = "Whirlwind"
  // if (skill[2] = 3 or 7) and selectedSkill != 19 then 256
  if (((skills[skillValue][2] == 3) || (skills[skillValue][2] == 7)) && (skillValue != 19)) { AnimationSpeed = 256; }

  // if ["Laying Traps"]
  if (skills[skillValue][2] == 5) { AnimationSpeed = 128; }

  // if assassin
  if (charValue == 1) {
    // if 2H sword
    // ["Balrog Blade", "Bastard Sword", "Champion Sword", "Claymore", "Colossus Blade", "Colossus Sword", "Dacian Falx", "Espandon", "Executioner Sword", "Flamberge", "Giant Sword", "Gothic Sword", "Great Sword", "Highland Blade", "Legend Sword", "Tusk Sword", "Two-Handed Sword", "Zweihander"]
    if (weapons[weaponValue][2] == 3) {
      // get some kind of property about of 2H swords
      FramesPerDirection = weapons[2][weaponValue][0];
    }
    AnimationSpeed = Math.floor(256 * 10 / Math.floor(256 * FramesPerDirection / Math.floor((100 + primaryIAS - parseInt(IASValue) - weapons[weapon][1]) * AnimationSpeed / 100)));
    FramesPerDirection = 12;
    // Throw
    if (skills[skillValue][2] == 6) { FramesPerDirection = 10; }
    StartingFrame = 0;
  }
  // if barbarian
  if (charValue == 2) {
    // if 2H sword
    if (weapons[weaponValue][2] == 3) {
      FramesPerDirection = weaponType[2][charValue][0];
    }
    AnimationSpeed = Math.floor(256 * 9 / Math.floor(256 * FramesPerDirection / Math.floor((100 + primaryIAS - parseInt(IASValue) - weapons[weaponValue][1]) * AnimationSpeed / 100)));
    FramesPerDirection = 13;
    // Fury
    if ((skillValue == 29) && (StartingFrame == 0)) { FramesPerDirection = 7; }
    // Throw
    if (skills[skillValue][2] == 6) { FramesPerDirection = 10; }
    StartingFrame = 0;
  }

  FPA = Math.ceil(256 * (FramesPerDirection - StartingFrame) / Math.floor(AnimationSpeed * Acceleration / 100)) - 1;
  FPAmax = Math.ceil(256 * (FramesPerDirection - StartingFrame) / Math.floor(AnimationSpeed * 175 / 100)) - 1;

  // Whirlwind
  if (skillValue == 19) {
    FPA = Math.floor(256 * FramesPerDirection / Math.floor(AnimationSpeed * Acceleration / 100));
    FPAmax = 0;
  }
  // Feral Rage
  if (skillValue == 26) {
    FPA = Math.ceil(256 * 7 / Math.floor(AnimationSpeed * Acceleration / 100)) + Math.ceil((256 * 13 - Math.floor(AnimationSpeed * Acceleration / 100) * Math.ceil(256 * 7 / Math.floor(AnimationSpeed * Acceleration / 100))) / (2 * Math.floor(AnimationSpeed * Acceleration / 100))) - 1;
    FPAmax = Math.ceil(256 * 7 / Math.floor(AnimationSpeed * 175 / 100)) + Math.ceil((256 * 13 - Math.floor(AnimationSpeed * 175 / 100) * Math.ceil(256 * 7 / Math.floor(AnimationSpeed * 175 / 100))) / (2 * Math.floor(AnimationSpeed * 175 / 100))) - 1;
  }

  if (cap == 1) {
    outputMax = '';

    if ((skills[skillValue][4] == 100) && (skills[skillValue][2] != 1) && (FPA <= FPAmax)) {
      outputMax = 'further IAS useless';
    }
  }

  return FPA;
}


function whirlwind(temp) {
  var temp;
  let result = 4;
  if (temp > 11) { result = 6; }
  if (temp > 14) { result = 8; }
  if (temp > 17) { result = 10; }
  if (temp > 19) { result = 12; }
  if (temp > 22) { result = 14; }
  if (temp > 25) { result = 16; }
  return result;
}

function computeWSM() {
  if ((charValue != 1) && (charValue != 2)) {
    primaryWSM = weapons[weaponValue][1];
  }
  if (((charValue == 1) || (charValue == 2)) && (document.myform.zweitwaffe.selectedIndex == 0)) {
    primaryWSM = weapons[weaponValue][1];
  }
  if (((charValue == 1) || (charValue == 2)) && (secondWeaponValue > 0)) {
    if (document.myform.primaerwaffe[0].checked == true) {
      primaryWSM = parseInt((weapons[weaponValue][1] + weapons[secondWeaponValue][1]) / 2);
      secondaryWSM = parseInt((weapons[weaponValue][1] + weapons[secondWeaponValue][1]) / 2) + weapons[secondWeaponValue][1] - weapons[weaponValue][1];
    } else {
      primaryWSM = parseInt((weapons[weaponValue][1] + weapons[secondWeaponValue][1]) / 2) + weapons[weaponValue][1] - weapons[secondWeaponValue][1];
      secondaryWSM = parseInt((weapons[weaponValue][1] + weapons[secondWeaponValue][1]) / 2);
    }
  }
}

function computeEIAS() {
  if (weaponValue == 0) {
    primaryIAS = parseInt(IASValue);
  }
  if ((weaponValue > 0) && (secondWeaponValue == 0)) {
    primaryIAS = parseInt(IASValue) + parseInt(weapon1IAS);
  }
  if (secondWeaponValue > 0) {
    primaryIAS = parseInt(IASValue) + parseInt(weapon1IAS);
    secondaryIAS = parseInt(IASValue) + parseInt(weapon2IAS);
  }
  primaryEIAS = Math.floor(120 * primaryIAS / (120 + primaryIAS)); secondaryEIAS = Math.floor(120 * secondaryIAS / (120 + secondaryIAS));
}

function computeSIAS() {
  const fana = parseInt(fanaValue);
  const frenzy = parseInt(frenzyValue);
  let wolf = parseInt(wolfValue);
  const tempo = parseInt(tempoValue);
  const holyfrost = parseInt(holyfrostValue);
  if (charFormValue != 2) { wolf = 0; }
  SIAS = fana + frenzy + wolf + tempo - holyfrost;
  if (skillValue == 16) { SIAS += 50; }
  if (skillValue == 13) { SIAS -= 40; }
  // if (document.myform.altern.checked == true) { SIAS -= 50; }
  if ((skills[skillValue][2] == 7) && (charValue < 7)) { SIAS -= 30; }
}
