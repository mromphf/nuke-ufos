extends Traveler

class_name Laser

var _VELOCITY = Vector2(0, -10)

func _on_collide(_body):
	_despawn()

func _process(_delta):
	super(_delta)
	position += _VELOCITY
