extends Sprite2D

@onready var _BOUND = get_viewport_rect().size.y

var _VELOCITY = Vector2(0.0, 1.0)

func _process(delta):
	position += _VELOCITY
	if position.y > _BOUND:
		queue_free()

