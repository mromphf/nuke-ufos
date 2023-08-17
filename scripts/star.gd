extends Sprite2D

func _process(delta):
	position.y += 1
	if position.y >= 1005:
		queue_free()
