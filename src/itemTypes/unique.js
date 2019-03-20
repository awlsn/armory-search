import React, { Component } from 'react';
class Unique extends Component {
    render() {
        return (

            <div class="item row">
                <div class="row">
                    <ul class="upgradeItems">
                        <li><a onclick="$('[id^=\'Lenymo\'').hide();$('[id=\'Lenymo BAS\']').show();">Lenymo</a><br>Normal</li>
                            <li><a onclick="$('[id^=\'Lenymo\'').hide();$('[id=\'Lenymo EXC\']').show();">Lenyme</a><br>Exceptional</li>
                                <li><a onclick="$('[id^=\'Lenymo\'').hide();$('[id=\'Lenymo ELI\']').show();">Lenyma</a><br>Elite</li>
      </ul>
    </div>
                            <div class="row" id="Lenymo BAS">
                                <div class="item-left four columns"><span class="item-graphic "><img
                                    src="/images/items/uni-lbl1bas_8.png"></span><span class="item-name diablo_unique">Lenymo</span><span
                                        class="item-type">Sash</span></div>
                                    <div class="item-right eight columns"><span class="item-property"><span class="no-wrap diablo_white">Defense:
          </span><span class="no-wrap diablo_blue">3</span></span><span class="item-property"><span
                                            class="no-wrap diablo_white">Required Level: 2</span></span><span class="item-property"><span
                                                class="no-wrap diablo_white">Item Level: 5</span></span><span class="item-property"><span
                                                    class="no-wrap diablo_blue">+(60 - 80)% Enhanced Defense</span></span><span class="item-property"><span
                                                        class="no-wrap diablo_blue">30% Increased Mana Regeneration</span></span><span class="item-property"><span
                                                            class="no-wrap diablo_blue">+(20 - 25)% Elemental Resistances</span></span><span class="item-property"><span
                                                                class="no-wrap diablo_blue">+1 to Light Radius</span></span><span class="item-property"><span
                                                                    class="no-wrap gray">This item can be upgraded with 1 Lesser Diviner's Orb(s) </span><span
                                                                        class="no-wrap diablo_blue"></span></span></div>
                                </div>
                                <div class="row" id="Lenymo EXC" style="display: none;">
                                    <div class="item-left four columns"><span class="item-graphic "><img
                                        src="/images/items/uni-lbl1exc_8.png"></span><span class="item-name diablo_unique">Lenyme</span><span
                                            class="item-type">Demonhide Sash</span></div>
                                        <div class="item-right eight columns"><span class="item-property"><span class="no-wrap diablo_white">Defense:
          </span><span class="no-wrap diablo_blue">68-74</span></span><span class="item-property"><span
                                                class="no-wrap diablo_white">Required Strength: 20</span></span><span class="item-property"><span
                                                    class="no-wrap diablo_white">Required Level: 36</span></span><span class="item-property"><span
                                                        class="no-wrap diablo_white">Item Level: 99</span></span><span class="item-property"><span
                                                            class="no-wrap diablo_blue">+1 to All Skills</span></span><span class="item-property"><span
                                                                class="no-wrap diablo_blue">+(100 - 120)% Enhanced Defense</span></span><span class="item-property"><span
                                                                    class="no-wrap diablo_blue">30% Increased Mana Regeneration</span></span><span class="item-property"><span
                                                                        class="no-wrap diablo_blue">+(20 - 25)% Elemental Resistances</span></span><span class="item-property"><span
                                                                            class="no-wrap diablo_blue">+1 to Light Radius</span></span><span class="item-property"><span
                                                                                class="no-wrap gray">This item can be upgraded with 6 Lesser Diviner's Orb(s) </span><span
                                                                                    class="no-wrap diablo_blue"></span></span></div>
                                    </div>
                                    <div class="row" id="Lenymo ELI" style="display: none;">
                                        <div class="item-left four columns"><span class="item-graphic "><img
                                            src="/images/items/uni-lbl1eli_8.png"></span><span class="item-name diablo_unique">Lenyma</span><span
                                                class="item-type">Spiderweb Sash</span></div>
                                            <div class="item-right eight columns"><span class="item-property"><span class="no-wrap diablo_white">Defense:
          </span><span class="no-wrap diablo_blue">155-173</span></span><span class="item-property"><span
                                                    class="no-wrap diablo_white">Required Strength: 50</span></span><span class="item-property"><span
                                                        class="no-wrap diablo_white">Required Level: 57</span></span><span class="item-property"><span
                                                            class="no-wrap diablo_white">Item Level: 99</span></span><span class="item-property"><span
                                                                class="no-wrap diablo_blue">+1 to All Skills</span></span><span class="item-property"><span
                                                                    class="no-wrap diablo_blue">+(150 - 180)% Enhanced Defense</span></span><span class="item-property"><span
                                                                        class="no-wrap diablo_blue">30% Increased Mana Regeneration</span></span><span class="item-property"><span
                                                                            class="no-wrap diablo_blue">+(30 - 35)% Elemental Resistances</span></span><span class="item-property"><span
                                                                                class="no-wrap diablo_blue">+1 to Light Radius</span></span></div>
                                        </div>
                                    </div>

                                    )
                                }
                                    
}
export default Unique;
