extends Control


@onready var hp = $ProgressBar
@onready var fuel = $Fuel

var score = 0


func update_score(val):
	score += val
	$Score.text = str(score)
	

func on_burn_fuel(f):
	fuel.value += f


func on_player_hit():
	hp.value -= 34
