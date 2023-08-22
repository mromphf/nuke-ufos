extends Traveler

class_name Enemy

signal dead
signal attack

var death: PackedScene = preload("res://scenes/death.tscn")

@export var hp: int = 1
@export var value: int = 10

func _die():
	var d = death.instantiate()
	d.position = position
	get_parent().add_child(d)
	emit_signal(&"dead", value)
	queue_free()

func _on_collide(body):
	hp -= 1

	if body is Player or hp <= 0:
		_die()
