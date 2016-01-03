var fs = require('fs');
var clone = (a) => {
	return JSON.parse(JSON.stringify(a))
};
module.exports = function(options) {


	function parseShop() {
		var file = fs.readFileSync('./shop.txt', {encoding: 'utf-8'});
		var sections = file.split('\n\n');
		var shop = {};

		sections.forEach((chunk) => {
			var section = chunk.split('\n');
			var selSection = "";
			section.forEach((line, index)=> {
				if (index == 0) {
					selSection = line.split(':')[0].toLowerCase();
					shop[selSection] = {};
				}
				else {
					var arr = line.split(/\s\s+/);
					shop[selSection][arr[0]] = {
						cost: parseInt(arr[1]),
						damage: parseInt(arr[2]),
						armor: parseInt(arr[3])
					}
				}
			});
		});
		shop['armor']['empty'] = null;
		shop['rings']['empty'] = null;

		return shop;
	}

	function parseBoss() {
		return {
			hp: 109,
			damage: 8,
			armor: 2
		};
	}

	function fight(_player, _boss) {
		var player = clone(_player);
		var boss = clone(_boss);
	
		var counter = 0;
		while(true) {
			if (counter % 2 == 0) { //player hits
				var damageTaken = player.damage - boss.armor;
				boss.hp -= (damageTaken > 0) ? damageTaken : 1;
			}
			else {
				var damageTaken = boss.damage - player.armor;
				player.hp -= (damageTaken > 0) ? damageTaken : 1;
			}
			
			if (boss.hp <= 0) return true;
			if (player.hp <= 0) return false;
			counter++;
		}
	}

	function equip(player) {

	}

	function algorithm(options) {
		var part2 = options.part2;
		var shop = parseShop();
		var boss = parseBoss();

		var cost = 0;
		var wins = [];
		var losses = [];
	
		for (var i = 0; i < Object.keys(shop.weapons).length; i++) {
			for (var j = 0; j < Object.keys(shop.armor).length; j++) {
				for (var k = 0; k < Object.keys(shop.rings).length; k++) {
					for (var l = 0; l < Object.keys(shop.rings).length; l++) {
						var weapon =shop.weapons[Object.keys(shop.weapons)[i]];
						var armor = shop.armor[Object.keys(shop.armor)[j]];
						var ring1 = shop.rings[Object.keys(shop.rings)[k]];
						var ring2 = shop.rings[Object.keys(shop.rings)[l]];

						if (k == l) continue;

						var armorPoints = armor ? armor.armor : 0;
						var damage = weapon.damage;
						if (ring1) {
							armorPoints += ring1.armor;
							damage += ring1.damage;
							cost += ring1.cost;
						}
						if (ring2) {
							armorPoints += ring2.armor;
							damage += ring2.damage;
							cost += ring2.cost;
						}


						var player = {
							hp: 100,
							damage: damage,
							armor: armorPoints
						}

						var win = fight(player, boss);
						cost += weapon.cost
						if(armor) cost +=armor.cost;

						if (win) {
							wins.push(cost);
						}
						else {
							losses.push(cost)
						}

						cost = 0;
					};
				};
			};
		};

		return part2 ? Math.max.apply(null, losses) : Math.min.apply(null, wins)
	}

	function step1() {
		return algorithm({part2: false});
	}

	function step2() {
		return algorithm({part2: true});
	}


	return {
		fight: fight,
		step1: step1,
		step2: step2
	}
}