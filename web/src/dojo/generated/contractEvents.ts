/* Autogenerated file. Do not edit manually. */

import { Type as RecsType } from "@latticexyz/recs";
import { GetTransactionReceiptResponse, Contract } from "starknet";

export enum WorldEvents {
 Upgraded= "0x2db340e6c609371026731f47050d3976552c89b4fbb012941663841c59d1af3",
Decision= "0xc9315f646a66dd126a564fa76bfdc00bdb47abe0d8187e464f69215dbf432a",
Consequence= "0x1335a57b72e0bcb464f40bf1f140f691ec93e4147b91d0760640c19999b841d",
GameOver= "0x165460ded86991fa560a0d331810f83651da90c5df6d4b61357c3b3807ff41c",
GameCreated= "0x230f942bb2087887c3b1dd964c716614bb6df172214f22409fefb734d96a4d2",
PlayerJoined= "0x214916ce0265d355fd91110809ffba7b5e672b108a8beea3dd235818431264b",
MapCreated= "0x3ab1429ec08f924437d3e8de46a87dfb89a9e1b95ea3abc3d01322cab69f5d0",
BoughtItem= "0x96f1e086de05db8162b5bf8e95b3ff061eeb8a5a88750a793a297379dd74ea",
DroppedItem= "0x2abc912df1c0f1fee176c373767d13b5e7e1fcdd11f8e44714334335b1ed653",
Bought= "0x20cb8131637de1953a75938db3477cc6b648e5ed255f5b3fe3f0fb9299f0afc",
Sold= "0x123e760cef925d0b4f685db5e1ac87aadaf1ad9f8069122a5bb03353444c386",
Traveled= "0x2c4d9d5da873550ed167876bf0bc2ae300ce1db2eeff67927a85693680a2328",
AdverseEvent= "0x3605d6af5b08d01a1b42fa16a5f4dc202724f1664912948dcdbe99f5c93d0a0",
MarketEvent= "0x255825b8769ab99d6c1bd893b440a284a39d8db18c76b91e8e6a70ef5c7a8e0",
AtPawnshop= "0x32bd5f84a36928d15d6fee2bf7ac959c1443e069aac774e6e00e596dec31a65",
};

export interface UpgradedData{
      class_hash: RecsType.String
      }

export interface DecisionData{
      game_id: RecsType.Number
player_id: RecsType.String
action: RecsType.String
      }

export interface ConsequenceData{
      game_id: RecsType.Number
player_id: RecsType.String
outcome: RecsType.String
health_loss: RecsType.Number
drug_loss: RecsType.Number
cash_loss: RecsType.BigInt
dmg_dealt: RecsType.Number
cash_earnt: RecsType.BigInt
      }

export interface GameOverData{
      game_id: RecsType.Number
player_id: RecsType.String
player_name: RecsType.BigInt
player_status: RecsType.String
turn: RecsType.Number
cash: RecsType.BigInt
      }

export interface GameCreatedData{
      game_id: RecsType.Number
game_mode: RecsType.String
creator: RecsType.String
start_time: RecsType.Number
      }

export interface PlayerJoinedData{
      game_id: RecsType.Number
player_id: RecsType.String
player_name: RecsType.BigInt
      }

export interface MapCreatedData{
      game_id: RecsType.Number
player_x: RecsType.Number
player_y: RecsType.Number
enemy_x: RecsType.Number
enemy_y: RecsType.Number
      }

export interface BoughtItemData{
      game_id: RecsType.Number
player_id: RecsType.String
item_id: RecsType.String
level: RecsType.Number
cost: RecsType.Number
      }

export interface DroppedItemData{
      game_id: RecsType.Number
player_id: RecsType.String
item_id: RecsType.String
      }

export interface BoughtData{
      game_id: RecsType.Number
player_id: RecsType.String
drug_id: RecsType.String
quantity: RecsType.Number
cost: RecsType.BigInt
      }

export interface SoldData{
      game_id: RecsType.Number
player_id: RecsType.String
drug_id: RecsType.String
quantity: RecsType.Number
payout: RecsType.BigInt
      }

export interface TraveledData{
      game_id: RecsType.Number
player_id: RecsType.String
turn: RecsType.Number
from_location: RecsType.String
to_location: RecsType.String
      }

export interface AdverseEventData{
      game_id: RecsType.Number
player_id: RecsType.String
player_status: RecsType.String
health_loss: RecsType.Number
demand_pct: RecsType.Number
      }

export interface MarketEventData{
      game_id: RecsType.Number
location_id: RecsType.String
drug_id: RecsType.String
increase: RecsType.Boolean
      }

export interface AtPawnshopData{
      game_id: RecsType.Number
player_id: RecsType.String
      }

