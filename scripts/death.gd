extends Node2D


func _ready():
	$Particles.emitting = true
	$Boom.play()


func _despawn():
	queue_free()
