extends Area2D

@export var death: PackedScene

var _VELOCITY: Vector2 = Vector2(0, 5)


func _on_collide(_body):
	var d = death.instantiate()
	d.position = position
	get_parent().add_child(d)
	queue_free()

func _process(_delta):
	position += _VELOCITY
	if position.y >= 1005:
		queue_free()
