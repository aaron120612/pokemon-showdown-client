/**
 * Main menu panel
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license AGPLv3
 */

class MainMenuRoom extends PSRoom {
	readonly classType: string = 'mainmenu';
	receive(msg: string) {
		//
	}
}

class MainMenuPanel extends preact.Component<{style: {}, room: PSRoom}> {
	render() {
		return <div class="ps-room scrollable" id={`room-${this.props.room.id}`} style={this.props.style}>
			<div class="mainmenuwrapper">
				<div class="leftmenu">
					<div class="activitymenu">
						<div class="pmbox">
							<div class="pm-window news-embed" data-newsid="<!-- newsid -->">
								<h3><button class="closebutton" tabIndex={-1}><i class="fa fa-times-circle"></i></button><button class="minimizebutton" tabIndex={-1}><i class="fa fa-minus-circle"></i></button>News</h3>
								<div class="pm-log" style="max-height:none">
									News box!!
								</div>
							</div>
						</div>
					</div>
					<div class="mainmenu">
						<div id="loading-message" class="mainmessage">[insert main menu here]</div>
					</div>
				</div>
				<div class="rightmenu">
				</div>
				<div class="mainmenufooter">
					<div class="bgcredit"></div>
					<small><a href="//dex.pokemonshowdown.com/" target="_blank">Pok&eacute;dex</a> | <a href="//replay.pokemonshowdown.com/" target="_blank">Replays</a> | <a href="//pokemonshowdown.com/rules" target="_blank">Rules</a> | <a href="//pokemonshowdown.com/credits" target="_blank">Credits</a> | <a href="http://smogon.com/forums/" target="_blank">Forum</a></small>
				</div>
			</div>
		</div>;
	}
}

PS.roomTypes['mainmenu'] = {
	Model: MainMenuRoom,
	Component: MainMenuPanel,
};