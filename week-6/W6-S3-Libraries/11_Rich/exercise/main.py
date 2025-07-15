from InquirerPy import prompt
from rich.console import Console
from rich.table import Table
from rich.progress import Progress
import time

console = Console()

# Get user input with Inquirer
questions = [
    {"type": "input", "name": "name", "message": "What is your name?"},
    {"type": "input", "name": "color", "message": "What is your favorite color?"},
]
answers = prompt(questions)


# Get user input with Inquirer
questions2 = [
    {"type": "input", "name": "song", "message": "What is your favourite Song?"},
    {"type": "input", "name": "sport", "message": "What is your favorite Sport?"},
]
answers2 = prompt(questions2)


# Display a formatted message with Rich
console.print(
    f"Hello, [bold {answers['color']}] {answers['name']}![/bold {answers['color']}]",
    style=answers["color"],
)

# Display a formatted message with Rich
console.print(
    f"Hello, [bold {answers2['song']}] {answers2['sport']}![/bold]",
    style=answers["color"],
)

# Create a table using Rich
table = Table(title="Sample Data")
table.add_column("ID", justify="right", style="cyan")
table.add_column("Name", style="magenta")
table.add_column("Score", justify="right", style="green")

table.add_row("1", "Alice", "85")
table.add_row("2", "Bob", "92")
table.add_row("3", "Charlie", "78")

console.print(table)

# Show a progress bar
with Progress() as progress:
    task = progress.add_task("Processing...", total=100)
    for _ in range(10):
        time.sleep(0.3)
        progress.update(task, advance=10)

console.print("[bold green]Task Complete![/bold green] ✅")
