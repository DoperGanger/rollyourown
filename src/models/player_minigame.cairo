use starknet::ContractAddress;
use rollyourown::models::player::Player;

#[derive(Model, Copy, Drop, Serde)]
struct PlayerMiniGame {
    #[key]
    game_id: u32,
    #[key]
    player_id: ContractAddress,
    _player: Player,
    position: u32,
}

#[generate_trait]
impl PlayerMiniGameImpl of PlayerMiniGameTrait {}
