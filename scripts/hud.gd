extends Control


@onready var hp = $ProgressBar
@onready var fuel = $Fuel


func on_burn_fuel(f):
	fuel.value += f


func on_player_hit():
	hp.value -= 34