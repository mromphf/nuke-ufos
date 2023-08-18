extends Area2D

class_name Laser

signal despawned

func _despawn():
	emit_signal(&"despawned")
	queue_free()

func _on_collide(_body):
	_despawn()

func _process(_delta):
	position += Vector2(0, -10)
	if position.y <= 0:
		print("Goodbye!")
		_despawn()

