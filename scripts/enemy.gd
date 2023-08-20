extends Traveler

class_name Enemy

signal dead

var death: PackedScene = preload("res://scenes/death.tscn")

@export var hp: int = 1

func _die():
	var d = death.instantiate()
	d.position = position
	get_parent().add_child(d)
	emit_signal(&"dead", 10)
	queue_free()

func _on_collide(body):
	hp -= 1

	if body is Player or hp <= 0:
		_die()
