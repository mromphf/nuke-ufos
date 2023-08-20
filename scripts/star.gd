extends Sprite2D

var _speed = 1
var _direction = Vector2(0.0, 1.0)

func despawn():
	queue_free()

func _process(_delta):
	position += (_direction.normalized() * _speed)
