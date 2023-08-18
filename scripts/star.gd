extends Sprite2D

func _process(_delta):
	position += Vector2(0.0, 1.0)
	if position.y >= 1005:
		queue_free()

