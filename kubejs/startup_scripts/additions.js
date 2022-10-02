// priority: 0

onEvent('item.registry', event => {
	event.create('soul_spicy').displayName('Soul of the Spicy')
	event.create('kannium_ingot').displayName('Kannium Ingot')
	event.create('burnium_ingot').displayName('Burnium Ingot')
	event.create('ritzite_ingot').displayName('Ritzite Ingot')
	event.create('alleenazite_ingot').displayName('Alleenazite Ingot')
	event.create('crude_alleenazite').displayName('Crude Alleenazite').type('create:sequenced_assembly')
	event.create('phoenerium_ingot').displayName('Phoenerium Ingot')
	event.create('diet_ingot').displayName('Dieterium Ingot')
	event.create('yumikomium_ingot').displayName('Yumikomium Ingot')
	event.create('sniffityrium_ingot').displayName('Sniffityrium Ingot')
	event.create('bobbyrium_ingot').displayName('Bobbyrium Ingot')
	event.create('gagerite_ingot').displayName('Gagerite Ingot')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})