
onEvent('item.tags', event => {
    event.add('forge:marble', '#chisel:marble'),
    event.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble'])
})