extends Area2D

class_name Laser

func _on_collide(_body):
	queue_free()

func _process(_delta):
	position += Vector2(0, -5)
	if position.y <= 0:
		print("Goodbye!")
		queue_free()

