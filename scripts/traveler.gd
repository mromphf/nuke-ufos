extends Area2D

class_name Traveler

signal despawned

@export var velocity = Vector2.ZERO

func despawn():
	emit_signal(&"despawned")
	queue_free()

func _process(_delta):
	position += velocity
