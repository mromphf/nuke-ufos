extends Traveler

@export var death: PackedScene


func _init():
	_velocity = Vector2(0, 5)

func _on_collide(_body):
	var d = death.instantiate()
	d.position = position
	get_parent().add_child(d)
	queue_free()
