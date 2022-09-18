// priority: 0
onEvent('recipes', event => {

    // Resourceful Bees
	event.shaped('resourcefulbees:t1_apiary', [
        'CUC',
        'USU',
        'CUC'
      ], {
        C: '#resourcefulbees:resourceful_honeycomb_block',
        U: 'resourcefulbees:t4_hive_upgrade',
        S: 'minecraft:nether_star'
      }),

      event.shaped('resourcefulbees:t2_hive_upgrade', [
        'CWC',
        'WUW',
        'CWC'
      ], {
        C: '#resourcefulbees:resourceful_honeycomb',
        U: 'resourcefulbees:t1_hive_upgrade',
        W: 'resourcefulbees:wax'
      }),

      event.shaped('resourcefulbees:t3_hive_upgrade', [
        'CWC',
        'WUW',
        'CWC'
      ], {
        C: '#resourcefulbees:resourceful_honeycomb_block',
        U: 'resourcefulbees:t2_hive_upgrade',
        W: 'resourcefulbees:wax_block'
      }),

      event.shaped('resourcefulbees:t4_hive_upgrade', [
        'CWC',
        'WUW',
        'CWC'
      ], {
        C: '#resourcefulbees:resourceful_honeycomb_block',
        U: 'resourcefulbees:t3_hive_upgrade',
        W: '#resourcefulbees:resourceful_honey_block'
      }),

      event.shaped('dimdungeons:block_key_charger', [
        'GEG',
        'GGG',
        'BBB'
      ], {
        G: 'dimdungeons:block_gilded_portal',
        E: 'minecraft:ender_eye',
        B: 'minecraft:stone_bricks'
      })
  })