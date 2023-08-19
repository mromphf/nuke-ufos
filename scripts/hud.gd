extends Control


signal player_dead

@onready var hp = $ProgressBar


func on_player_hit():
	hp.value -= 34
	if hp.value <= 0:
		emit_signal(&"player_dead")
