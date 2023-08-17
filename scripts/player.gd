extends Area2D

var _SPEED = 400


func _ready():
	pass

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
