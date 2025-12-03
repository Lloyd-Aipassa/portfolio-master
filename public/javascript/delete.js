document.querySelectorAll(".delete-coin-btn").forEach((button) => {
	button.addEventListener("click", async (event) => {
		const result = confirm("Do you want to proceed?");
		if (result) {
			const target = event.target;
			// const target = event.target as HTMLElement;
			const coinId = target.dataset.coinId;

			if (!coinId) {
				console.error(
					"No coinId found on the clicked element"
				);
				return;
			}

			try {
				const response = await fetch(
					`https://backend-portfolio-coin.lloyd-aipassa.deno.net/coins/${coinId}`,
					{
						method: "DELETE",
						headers: {
							"Content-Type":
								"application/json",
						},
					}
				);

				console.log(response);

				if (!response.ok) {
					throw new Error(
						`Error: ${response.status}`
					);
				} else {
					location.reload();
				}
			} catch (error) {
				console.error(
					"Error deleting coin:",
					error
				);
			}
		}
	});
});