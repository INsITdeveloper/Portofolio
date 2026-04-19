from playwright.sync_api import sync_playwright

def verify_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 2000})
        try:
            # Navigate to the local dev server
            page.goto("http://localhost:5173/", wait_until="networkidle")

            # Wait for animations to settle
            page.wait_for_timeout(2000)

            # Take a screenshot of the hero section
            page.screenshot(path="hero_v2.png")

            # Scroll down to see projects
            page.evaluate("window.scrollTo(0, 1000)")
            page.wait_for_timeout(1000)
            page.screenshot(path="projects_v2.png")

            print("Screenshots captured successfully.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_ui()
