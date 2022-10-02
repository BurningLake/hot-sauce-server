
onEvent('item.tags', event => {
    event.add('forge:marble', '#chisel:marble'),
    event.add('chisel:marble', ['astralsorcery:marble_raw', 'quark:marble']),
    event.add('forge:wither_bones', '#forge:bones/wither')

    event.remove('forge:dyes/yellow', ['mekanism:dust_sulfur', 'bloodmagic:sulfur', 'eidolon:sulfur'])
})