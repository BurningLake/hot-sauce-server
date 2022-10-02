onEvent("block.right_click", event =>{
    if(event.block.id=='betternether:cincinnasite_anvil'){
        event.block.set("minecraft:anvil")
    }
});