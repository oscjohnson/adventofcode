module.exports = function(options) {

	function getSpells() {
		return	[
		{
			name: 'Magic Missile',
			cost: 53,
			damage: 4,
			armor: 0,
			heal: 0
			mana: 0,
			duration: 0,
		},
		{
			name: 'Drain',
			cost: 73,
			damage: 2,
			armor: 0,
			heal: 2
			mana: 0,
			duration: 0,
		},
		{
			name: 'Shield',
			cost: 113,
			damage: 0,
			armor: 7,
			heal: 0,
			mana: 0,
			duration: 6,
		},
		{
			name: 'Poision',
			cost: 173,
			damage: 3,
			armor: 0,
			heal: 0,
			mana: 0,
			duration: 6,
		},
		{
			name: 'Recharge',
			cost: 229,
			damage: 0
			armor: 0,
			heal: 0,
			mana: 101,
			duration: 5,
		}
		]
	}


function step1() {
	var player = {hp: 50, mana: 500};
	var boss = {hp: 58, damage: 89}


}

function step2() {}

	return {
		step1: step1,
		step2: step2
	}
}