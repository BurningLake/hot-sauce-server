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

    // Dimensional Dungeons
    event.shaped('dimdungeons:block_key_charger', [
      'GEG',
      'GGG',
      'BBB'
    ], {
      G: 'dimdungeons:block_gilded_portal',
      E: 'minecraft:ender_eye',
      B: 'minecraft:stone_bricks'
    }),

    // Cincinnasite
    event.shaped('betternether:cincinnasite_chain', [
      ' N ',
      ' C ',
      ' N '
    ], {
      N: 'minecraft:gold_nugget',
      C: 'betternether:cincinnasite_ingot'
    }),

    // Custom Items
    event.shaped('kubejs:sniffityrium_ingot', [
      'FFF',
      'CSC',
      'TTT'
    ], {
      F: 'ironfurnaces:netherite_furnace',
      C: 'minecraft:conduit',
      T: 'minecraft:tnt',
      S: 'kubejs:soul_spicy'
    }),

    // Smithing Table
    event.smithing('kubejs:yumikomium_ingot', 'kubejs:soul_spicy', Item.of('globalxp:xp_block', '{BlockEntityTag:{id:"globalxp:xp_block",stored_xp:1045970}}').weakNBT())

    // Blood Magic
    event.recipes.bloodmagic.alchemytable('kubejs:ritzite_ingot', ['kubejs:soul_spicy', 'minecraft:stone', Item.of('inventorypets:pet_illuminati', '{Damage:3}').weakNBT(), 'minecraft:tnt', 'minecraft:tnt', 'minecraft:tnt']).syphon(1500000).ticks(100).upgradeLevel(4)

    // Create Sequenced Assembly
    let transition = 'kubejs:crude_alleenazite'
    event.recipes.createSequencedAssembly(['kubejs:alleenazite_ingot'], 'kubejs:soul_spicy', [
      event.recipes.createDeploying(transition, [transition, 'compressium:redstone_2']),
      event.recipes.createFilling(transition, [transition, Fluid.of('tconstruct:molten_netherite', 1296)]),
      event.recipes.createPressing(transition, transition),
      event.recipes.createCutting(transition, transition)
      ]
    ).transitionalItem(transition).loops(10)

    // Mekanism Nucleosynthesis
    event.custom({
      type:'mekanism:nucleosynthesizing',
      itemInput: {
        ingredient: {
          item: 'kubejs:soul_spicy'
        }
      },
      gasInput: {
        amount: 10000,
        gas: 'mekanism:antimatter'
      },
      output: {
      item: 'kubejs:burnium_ingot'
      },
      duration: 500
    })

    // Mythic Botany Mana Infusing
    event.custom({
      "type": "mythicbotany:infusion",
      "group": "infuser",
      "output": {
        "item": "kubejs:bobbyrium_ingot"
      },
      "mana": 10000000,
      "ingredients": [
        {
          "item": "kubejs:soul_spicy"
        },
        {
          "item": "mythicbotany:aura_ring_greatest"
        },
        {
          "item": "minecraft:bamboo"
        },
        {
          "item": 'rats:plague_stew'
        }
      ],
      "fromColor": 16711821,
      "toColor": 16750080
    })

    // Tinker's Casting
    event.custom({
      "type": "tconstruct:casting_table",
      "cast": {
        "item": "kubejs:soul_spicy"
      },
      "cast_consumed": true,
      "fluid": {
        "tag": "forge:honey",
        "amount": 1000000000
      },
      "result": "kubejs:kannium_ingot",
      "cooling_time": 60
    })

    // Astral Altar Crafting
    event.custom({
        "type": "astralsorcery:altar",
        "altar_type": 3,
        "duration": 720,
        "starlight": 6400,
        "pattern": [
          "_____",
          "_AAA_",
          "_ACA_",
          "_ABA_",
          "_____"
        ],
        "key": {
          "A": {
            "item": "compressium:sand_5"
          },
          "B": {
            "item": "astralsorcery:liquid_starlight_bucket"
          },
          "C": {
            "item": "kubejs:soul_spicy"
          }
        },
        "output": [
          {
            "item": "kubejs:phoenerium_ingot",
            "count": 1
          }
        ],
        "focus_constellation": "astralsorcery:alcara",
        "relay_inputs": [
          {
            "item": "astralsorcery:starmetal"
          },
          {
            "item": "minecraft:blue_bed"
          },
          {
            "item": "comforts:hammock_blue"
          },
          {
            "item": "minecraft:sugar_cane"
          }
        ],
        "effects": [
          "astralsorcery:built_in_effect_constellation_finish",
          "astralsorcery:built_in_effect_trait_relay_highlight",
          "astralsorcery:built_in_effect_discovery_central_beam",
          "astralsorcery:built_in_effect_trait_focus_circle",
          "astralsorcery:altar_default_sparkle",
          "astralsorcery:built_in_effect_constellation_lines",
          "astralsorcery:built_in_effect_attunement_sparkle"
        ]
    })

    // Pneumaticraft Assembly
    event.custom({
      "type": "pneumaticcraft:assembly_laser",
      "input": {
        "type": "pneumaticcraft:stacked_item",
        "item": "kubejs:soul_spicy",
        "count": 1
      },
      "result": {
        "item": "kubejs:diet_ingot",
        "count": 1
      },
      "program": "laser"
    })

    // Ars novovuvouvuovu Enchanting Apparatus
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "item_1": [
        {
          "tag": "forge:storage_blocks/mana"
        }
      ],
      "item_2": [
        {
          "item": 'upgradednetherite:corrupt_upgraded_netherite_ingot'
        }
      ],
      "item_3": [
        {
          "tag": "forge:storage_blocks/mana"
        }
      ],
      "item_4": [
        {
          "item": 'upgradednetherite:corrupt_upgraded_netherite_ingot'
        }
      ],
      "item_5": [
        {
          "item": 'upgradednetherite:corrupt_upgraded_netherite_ingot'
        }
      ],
      "item_6": [
        {
          "tag": "forge:storage_blocks/mana"
        }
      ],
      "item_7": [
        {
          "item": 'upgradednetherite:corrupt_upgraded_netherite_ingot'
        }
      ],
      "item_8": [
        {
          "tag": "forge:storage_blocks/mana"
        }
      ],
      "reagent": [
        {
          "item": "kubejs:soul_spicy"
        }
      ],
      "output": {
        "item": "kubejs:gagerite_ingot"
      }
    })

    // Ender Crafter
    event.custom({
      "type": "extendedcrafting:shaped_ender_crafter",
      "craftingTime": 60,
      "pattern": [
        "USU",
        "SRS",
        "USU"
      ],
      "key": {
        "R": { "item": 'alexsmobs:raccoon_tail' },
        "U": { "item": 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot' },
        "S": { "item": 'extendedcrafting:ultimate_singularity' }
      },
      "result": {
        "item": "kubejs:soul_spicy"
      }
    })

    // Combination Crafting
    event.custom({
      "type": "extendedcrafting:combination",
      "powerCost": 1000000000,
      "powerRate": 10000000,
      "input": {
        "item": 'extendedcrafting:crystaltine_block'
      },
      "ingredients": [
        {
          "item": 'kubejs:gagerite_ingot'
        },
        {
          "item": 'kubejs:bobbyrium_ingot'
        },
        {
          "item": 'kubejs:sniffityrium_ingot'
        },
        {
          "item": 'kubejs:yumikomium_ingot'
        },
        {
          "item": 'kubejs:diet_ingot'
        },
        {
          "item": 'kubejs:phoenerium_ingot'
        },
        {
          "item": 'kubejs:alleenazite_ingot'
        },
        {
          "item": 'kubejs:ritzite_ingot'
        },
        {
          "item": 'kubejs:burnium_ingot'
        },
        {
          "item": 'kubejs:kannium_ingot'
        }
      ],
      "result": {
        "item": 'extendedcrafting:the_ultimate_block'
      }
    })
  })
