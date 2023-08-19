extends Sprite2D

var _VELOCITY = Vector2(0.0, 1.0)

func _process(delta):
	position += _VELOCITY
	if position.y >= 1005:
		queue_free()

