// priority: 0
onEvent('recipes', event => {

	// Remove tiered beehives
	event.remove({output: 'resourcefulbees:t1_beehive'}),
	event.remove({output: 'resourcefulbees:t2_beehive'}),
	event.remove({output: 'resourcefulbees:t3_beehive'}),
	event.remove({output: 'resourcefulbees:t4_beehive'}),

	event.remove({output: 'resourcefulbees:t1_apiary'}),

	event.remove({output: 'resourcefulbees:t2_hive_upgrade'}),
	event.remove({output: 'resourcefulbees:t3_hive_upgrade'}),
	event.remove({output: 'resourcefulbees:t4_hive_upgrade'}),

	// Other Stuff
	event.remove({output: 'cyclic:soulstone'})
  })