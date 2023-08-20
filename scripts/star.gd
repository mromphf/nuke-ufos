extends Sprite2D

var _VELOCITY = Vector2(0.0, 1.0)

func despawn():
	queue_free()

func _process(_delta):
	position += _VELOCITY
