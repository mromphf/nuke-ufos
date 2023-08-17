extends Area2D

@export var laser: PackedScene
var _SPEED = 400


func _unhandled_input(_event):
	if Input.is_action_just_pressed(&"fire"):
		var l = laser.instantiate()
		l.global_position = $Gun.global_position
		get_parent().add_child(l)
		$Laser.play()


func _process(delta):
	var velocity = Vector2.ZERO

	if Input.is_action_pressed(&"move_up"):
		velocity.y -= 1
	if Input.is_action_pressed(&"move_down"):
		velocity.y += 1
	if Input.is_action_pressed(&"move_left"):
		velocity.x -= 1
	if Input.is_action_pressed(&"move_right"):
		velocity.x += 1

	if velocity.length() > 0:
		velocity = velocity.normalized() * _SPEED

	position += velocity * delta

func _on_collide(_body):
	print("Collision detected")
