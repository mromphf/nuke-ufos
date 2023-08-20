extends Area2D

class_name Player

signal hit
signal burn

var laser: PackedScene = preload("res://scenes/laser.tscn")

var _SPEED = 400
var _hp = 3
var ammo = 3
var ammo_max = 3
var fuel: float = 100

func ammo_up():
	ammo = min(ammo_max, ammo + 1)

func on_death():
	queue_free()

func _unhandled_input(_event):
	if Input.is_action_just_pressed(&"fire") and ammo > 0:
		ammo -= 1
		var l = laser.instantiate()
		l.connect(&"despawned", ammo_up)
		l.global_position = $Gun.global_position
		get_parent().add_child(l)
		Soundboard.play($Laser)


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


func _on_collide(body):
	if body is PowerUp:
		$PowerUp.play()
		$Animation.play(&"power_up")
		ammo += 1
		ammo_max += 1
	else:
		$Animation.play(&"hurt")
		_hp -= 1
		emit_signal(&"hit")
		if _hp <= 0:
			on_death()
