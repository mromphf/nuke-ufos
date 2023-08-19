extends Control


signal player_dead

@onready var hp = $ProgressBar
@onready var fuel = $Fuel


func on_burn_fuel():
	fuel.value -= 1


func on_player_hit():
	hp.value -= 34
	if hp.value <= 0:
		emit_signal(&"player_dead")
