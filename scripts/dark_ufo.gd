extends Ufo

class_name DarkUfo

var laser: PackedScene = preload("res://scenes/laser.tscn")

func _close_fire(_body):
	$Timer.stop()

func _open_fire(_body):
	call_deferred(&"_fire")
	$Timer.start();

func _fire():
	var shot = laser.instantiate()
	$Laser.play()
	shot.global_position = $Gun.global_position
	shot.set_collision_layer_value(4, true)
	shot.set_collision_mask_value(1, true)
	
	shot.set_collision_layer_value(3, false)
	shot.set_collision_mask_value(2, false)
	shot.direction = Vector2(0, 1)
	get_parent().add_child(shot)