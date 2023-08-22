extends Ufo

class_name DarkUfo

var laser: PackedScene = preload("res://scenes/phaser.tscn")

func _close_fire(_body):
	$Timer.stop()

func _open_fire(_body):
	call_deferred(&"_fire")
	$Timer.start();

func _fire():
	var shot = laser.instantiate()
	$Laser.play()
	shot.global_position = $Gun.global_position
	emit_signal(&"attack", shot)
