extends Node2D

class_name Traveler

signal despawned

@export var speed: float = 0.0
@export var direction: Vector2 = Vector2.ZERO

func despawn():
	emit_signal(&"despawned")
	queue_free()

func _on_collide(_body):
	queue_free()

func _process(_delta):
	position += direction.normalized() * speed
