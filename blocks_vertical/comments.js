'use strict';

goog.provide('Blockly.Blocks.comments'); // Credit to NitroBolt and Cubester for the idea of this category, although i kind of rewrote it.

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['comments_commstack'] = {
    /**
     * @this Blockly.Block
     */
    init: function(){
        this.jsonInit({
            "message0": Blockly.Msg.COMMENTS_COMMSTACK,
            "args0": [
                {
                    "type": "input_value",
                    "name": "MESSAGE"
                }
            ],
            "category": Blockly.Categories.comments,
            "extensions": ["colours_comments", "shape_statement"]
        });
    }
};