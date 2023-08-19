extends Area2D

class_name Traveler

signal despawned

@onready var bounds = get_viewport_rect().size
var _velocity = Vector2.ZERO

func _despawn():
	emit_signal(&"despawned")
	queue_free()

func _process(_delta):
	position += _velocity
	if position.y > bounds.y or position.y < -50:
		_despawn()
