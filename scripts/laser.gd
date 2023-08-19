extends Area2D

class_name Laser

signal despawned

var _VELOCITY = Vector2(0, -10)

func _despawn():
	emit_signal(&"despawned")
	queue_free()

func _on_collide(_body):
	_despawn()

func _process(delta):
	position += _VELOCITY
	if position.y <= 0:
		print("Goodbye!")
		_despawn()

