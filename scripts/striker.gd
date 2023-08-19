extends Area2D

var _VELOCITY: Vector2 = Vector2(0, 5)


func _on_collide(_body):
	queue_free()
	

func _process(_delta):
	position += _VELOCITY
	if position.y >= 1005:
		queue_free()
