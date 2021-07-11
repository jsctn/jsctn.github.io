import os
import shutil

# run this python3 script to flatten the 'posts' and 'archived_posts'
# directories in the instagram data export into a single directory, 
# with human-readable filenames. 

# - retains only .jpg and .mp4 files
# - copies files to the new directory. the data export is unchanged
# - sorting by post time isn't guaranteed, but the year/month will be accurate


#----------- VARIABLES: pls change these! -----------

# if True, doesn't actually copy anything
IS_DEBUG = True

# if True, prints out every filename copied
IS_VERBOSE = False

# path of directory i'm working in
ROOT_PATH = "C:\\\\Users\\JT\\Downloads"

# path to the 'posts' folder from the data dump, or set to None to skip
POSTS_PATH = os.path.join(ROOT_PATH, "posts")

# path to the 'archived_posts' folder from the data dump, or set to None to skip
ARCHIVED_PATH = os.path.join(ROOT_PATH, "archived_posts")

# destination folder
RES_PATH = os.path.join(ROOT_PATH, "jsctn-allposts")

#-------------- END OF VARIABLES ---------------


IMG_EXT = ".jpg"
VID_EXT = ".mp4"

def _is_jpg(filename):
    return filename[-4:] == IMG_EXT

def _is_video(filename):
    return filename[-4:] == VID_EXT


def copy_files():
    posts_ct = _copy_dir(POSTS_PATH, False) if POSTS_PATH else 0
    archived_ct = _copy_dir(ARCHIVED_PATH, True) if ARCHIVED_PATH else 0
    print()
    if IS_DEBUG:
        print("[DEBUGGING - files not actually copied]")
    print("copied and renamed {} posts and {} archived posts.".format(
        posts_ct,
        archived_ct
    ))

def _copy_dir(path, is_archived):
    if IS_DEBUG:
        print("\nCOPYING SUBDIR:", path)

    subdirs = os.listdir(path)
    moved_ct = 0
    for month_dir in subdirs:
        month_path = os.path.join(path, month_dir)
        posts = os.listdir(month_path)
        index = 1
        for post_filename in posts:
            file_ext = None
            if _is_video(post_filename):
                file_ext = VID_EXT
            if _is_jpg(post_filename):
                file_ext = IMG_EXT
            if not file_ext:
                post_subpath = os.path.join(month_dir, post_filename)
                print("skipped `{}` - not a recognized file type".format(post_subpath))
                continue

            filename_suffix = "-archived" if is_archived else ""
            new_filename = "{}-{:02d}{}{}".format(
                month_dir,
                index,
                filename_suffix,
                IMG_EXT
            )
            post_path = os.path.join(month_path, post_filename)
            new_path = os.path.join(RES_PATH, new_filename)

            if IS_DEBUG and IS_VERBOSE:
                print(post_path, "->", new_path)
            if not IS_DEBUG:
                shutil.copyfile(post_path, new_path)
            index += 1
            moved_ct += 1

    return moved_ct

copy_files()
