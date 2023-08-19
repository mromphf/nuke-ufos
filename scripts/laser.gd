extends Traveler

class_name Laser


func _init():
	_velocity = Vector2(0, -10)

func _on_collide(_body):
	_despawn()

