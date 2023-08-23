extends Area2D

class_name Player

signal hit
signal burn
signal shoot

const _BUFFER = Vector2(50, 50)

@onready var _BOUNDS = (get_viewport_rect().size - _BUFFER)

var laser: PackedScene = preload("res://scenes/laser.tscn")

var _SPEED = 400
var _hp = 3
var ammo = 3
var ammo_max = 3
var fuel: float = 100

func ammo_up():
	ammo = min(ammo_max, ammo + 1)


func _unhandled_input(_event):
	if Input.is_action_just_pressed(&"fire") and ammo > 0:
		var shot = laser.instantiate()
		ammo -= 1
		shot.connect(&"tree_exited", ammo_up)
		shot.global_position = $Gun.global_position
		emit_signal(&"shoot", shot)
		$Animation.play(&"shoot")


func _speed():
	if Input.is_action_pressed(&"speed") and fuel > 0:
		fuel -= 1
		emit_signal(&"burn", -1)
		return _SPEED * 2

	return _SPEED


func _process(delta):
	var direction = Vector2.ZERO

	if not Input.is_action_pressed(&"speed") and fuel < 100:
		fuel += 0.1
		emit_signal(&"burn", 0.1)

	if Input.is_action_pressed(&"move_up"):
		direction.y -= 1
	if Input.is_action_pressed(&"move_down"):
		direction.y += 1
	if Input.is_action_pressed(&"move_left"):
		direction.x -= 1
	if Input.is_action_pressed(&"move_right"):
		direction.x += 1

	if direction.length() > 0:
		direction = direction.normalized() * _speed()

	position += direction * delta
	position = position.clamp(_BUFFER, _BOUNDS)


func _on_power_up_collect(_body):
	ammo += 1
	ammo_max += 1
	$Animation.play(&"power_up")


func _on_collide(_body):
	_hp -= 1
	$Animation.play(&"hurt" if _hp > 0 else &"death")
	emit_signal(&"hit")
